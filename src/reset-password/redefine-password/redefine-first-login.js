import { React } from "react";
import LogoLogin from "../../utils/logo";
import FieldWithLabel from "../../utils/field-with-label";
import Button from "../../utils/button";
import useRedefineLogin from "./api-redefine-login";



function FormRedefineFirstLogin() {

  const { email, setEmail, submitEmail } = useRedefineLogin();

  // Se o usuário não estiver logado renderiza a página de esqueci minha senha
  return (
    <main className="login">
      <LogoLogin />
      <p>A senha que você recebeu é uma senha padrão enviada a todos os clientes para o primeiro acesso à plataforma, o que pode representar um risco à segurança.</p>
      <form onSubmit={e => submitEmail(e)} method="POST">
        <FieldWithLabel
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          id="email"
          label="Por favor, insira o email cadastrado para solicitar a redefinição da sua senha:" />
        <Button
          label="Solicitar Redefinição" />
      </form>

    </main>
  );
}

export default FormRedefineFirstLogin;
