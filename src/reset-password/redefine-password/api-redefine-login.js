import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import client from "../../utils/api-config";


/**
 * Hook para gerenciamento do processo de redefinição de senha.
 * Fornece estado e função para enviar um email de redefinição de senha.
 * 
 * @returns {object} Um objeto contendo o estado do email e a função de submitEmail.
 */
const useRedefineLogin = () => {

    // Armazena o email
    const [email, setEmail] = useState(''); 
    const navigate = useNavigate();



    /**
     * Função para submeter o email para redefinição de senha.
     * Envia uma requisição POST para a API de redefinição de senha.
     * Em caso de sucesso, exibe uma mensagem de sucesso e redireciona para a página de login.
     * Em caso de erro, exibe uma mensagem de erro apropriada.
     * 
     * @param {Event} e - Evento de submissão do formulário de email.
     */
    const submitEmail = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Por favor, insira o email cadastrado!");
            return;
        };
        toast.info("Enviando email...");
        try {
            const response = await client.post("/auth/redefine-password/", { email: email })
            if (response.status === 200) {
                toast.dismiss()
                toast.success("Email enviado com sucesso! Verifique sua caixa de SPAM.")
                setTimeout(function () {
                    navigate('/login')
                }, 8000);
            }
        } catch (error) {
            toast.dismiss()
            toast.error("Email incorreto ou não cadastrado!")
        }
    }

    // Retorna o email e a função de submitEmail
    return { email, setEmail, submitEmail }
}

export default useRedefineLogin;