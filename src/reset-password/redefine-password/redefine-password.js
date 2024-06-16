
import { React } from "react";
import LogoLogin from "../../utils/logo";
import FormField from "../../utils/field-with-label";
import Button from "../../utils/button";
import useRedefineLogin from "./api-redefine-login";
import useAuth from "../../utils/check-auth";



/**
 * Componente de formulário para redefinição de senha.
 * Renderiza um formulário para solicitar a redefinição de senha, incluindo um campo de email e um botão de envio.
 * Exibe uma mensagem informativa se for o primeiro login do usuário.
 * 
 * @returns {JSX.Element} Componente de formulário para redefinição de senha.
 */
function FormRedefinePassword() {

  const { email, setEmail, submitEmail } = useRedefineLogin();
  const { firstLogin } = useAuth();

  
  return (
    <main>
      <LogoLogin />
      {firstLogin && (
        <p>A senha que você recebeu é uma senha padrão enviada a todos os clientes para o primeiro acesso à plataforma, o que pode representar um risco à segurança.</p>
      )}
      <form onSubmit={e => submitEmail(e)} method="POST">
        <FormField
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          id="email"
          label="Insira o email cadastrado para solicitar a redefinição da sua senha:" />
        {!firstLogin && (
          <a href="/login">Voltar para a página de login</a>
        )}
        <Button
          label="Solicitar Redefinição" />
      </form>
    </main>
  );
}

export default FormRedefinePassword;