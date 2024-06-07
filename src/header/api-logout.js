import { useNavigate } from 'react-router-dom';
import client from "../utils/api-config";
import { toast } from 'react-toastify';


/**
 * Hook para gerenciamento de autenticação de usuário.
 * Fornece a funcionalidade de logout para usuário autenticados.
 * @returns {object} Função de logout.
 */

const useLogout = () => {

    const navigate = useNavigate();
    

     /**
     * Função para realizar o logout do usuário.
     * Envia uma requisição POST para a API de logout.
     * Em caso de sucesso, redireciona o usuário para a página de login.
     * Em caso de erro, exibe uma mensagem de erro.
     * 
     * @param {Event} e - Evento de submissão do formulário de logout.
     */
    const submitLogout = async (e) => {
        e.preventDefault();
        try{
            await client.post("/api/auth/logout");
            navigate('/login');
        } catch (error) {
            toast.error("Erro ao efetuar o logout")
        }
    };


    return { submitLogout };
};

export default useLogout;
