import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import client from "../utils/api-config";
import { toast } from 'react-toastify';
import useAuth from "../utils/check-auth";


/**
 * Hook para gerenciamento do processo de login de usuário.
 * Fornece estados e funções para lidar com o login do usuário.
 * 
 * @returns {object} Um objeto contendo os estados de username, password e a função de submitLogin.
 */
const useLogin = () => {

    // Estado para armazenar o nome de usuário, senha e status do usuário
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, firstLogin } = useAuth();
    const navigate = useNavigate();


     /**
     * Função para submeter o formulário de login.
     * Envia uma requisição POST para a API de login.
     * Em caso de sucesso, redireciona o usuário para a página inicial ou de redefinição de login se for o primeiro acesso.
     * Em caso de erro, exibe uma mensagem de erro apropriada.
     * 
     * @param {Event} e - Evento de submissão do formulário de login.
     */
    
    const submitLogin = async (e) => {
        e.preventDefault();
        if (!username) {
            toast.error("Por favor, insira o nome de usuário!");
            return;
        }
        if (!password) {
            toast.error("Por favor, insira a senha!")
            return;
        }
        if (!currentUser || currentUser === null){
            try {
                const response = await client.post("/api/auth/login", { username: username, password: password })
                if (response.status === 200) {
                    navigate('/');
                    if (firstLogin === true) {
                        navigate('/redefine-password')
                    }
                }
            } catch (error) {
                toast.error("Nome de usuário e/ou senha incorreto!")
            }
        }
    };

    
    // Retorna os estados e a função de submitLogin
    return { setUsername, username, setPassword, password, submitLogin };
}

export default useLogin;
