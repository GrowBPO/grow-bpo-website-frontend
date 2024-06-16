import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import client from "../../utils/api-config";
import { toast } from 'react-toastify';
import useAuth from "../../utils/check-auth";


const useResetPassword = () => {

    
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    
    const submitPassword = async (e) => {
        e.preventDefault();
        if (!newPassword) {
            toast.error("Por favor, insira a nova senha!");
            return;
        }
        if (!confirmPassword) {
            toast.error("Por favor, insira a confirmação da nova senha!");
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("As senhas não coincidem!");
            return;
        }
        try {
            const response = await client.post(`/auth/reset-password/${token}/`, { new_password: newPassword, confirm_password: confirmPassword })
            if (response.status === 200) {
                toast.dismiss()
                toast.success("Senha alterada com sucesso!")
                setTimeout(function () {
                    navigate('/login')
                }, 8000);
            }
        } catch (error) {
            toast.dismiss();
            if (error.response && error.response.data && error.response.data.error === "Token Inválido") {
                toast.error("O tempo para redefinição da senha expirou. Solicite o envio do link novamente.");
            } else {
                toast.error(<div>
                    <p>A sua senha deve possuir:</p>
                    <p>- 8 caracteres ou mais.</p>
                    <p>- Letras maiúsculas e minúsculas.</p>
                    <p>- Pelo menos um número.</p>
                    <p>- Pelo menos um caractere especial (@, #, $, %, *, /,) </p>
                </div>)    
            }
        }
    };

    return { submitPassword, newPassword, setNewPassword, confirmPassword, setConfirmPassword }
}

export default useResetPassword;