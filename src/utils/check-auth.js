import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import client from "../utils/api-config";


/**
 * Hook para gerenciamento de autenticação de usuário
 * Verifica o status de login do usuário 
 * @returns {object} Um objeto contendo o estado atual do usuário
 */

const useAuth = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [firstLogin, setFirstLogin] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';
    


    // Busca os dados do usuário de uma API determinando se é o primeiro login e redirecionando para a página adequada.
    useEffect(() => {
        const fecthUser = async () => {
            const res = await client.get("/auth/user/check");
            if (res.data.auth === 'true') {
                const response = await client.get("/auth/user");
                const first_login = response.data.user.first_login;
                setFirstLogin(first_login);
                setCurrentUser(true)
                if (first_login === true) {
                    navigate('/redefine-password')
                } else {
                    navigate('/')
                }
            } else {
                setCurrentUser(false)
                if (isHome){
                    navigate('/login')
                }
            }
        };

        fecthUser();


    }, [navigate, isHome]);

    
    return { currentUser, firstLogin };
};

export default useAuth;