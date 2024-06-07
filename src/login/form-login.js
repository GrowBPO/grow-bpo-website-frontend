import { React } from "react";
import LogoLogin from "../utils/logo";
import Button from "../utils/button";

import useLogin from "./api-login";
import "./form-login.css";
import FormField from "../utils/field-with-label";



/**
 * Componente de formulário de login.
 * Renderiza um formulário de login com campos para nome de usuário e senha, e lida com a submissão do formulário.
 * 
 * @returns {JSX.Element} Componente de formulário de login.
 */
function FormLogin() {

  // Hook customizado para gerenciamento do login
  const { setUsername, username, setPassword, password, submitLogin } = useLogin();


  // Renderiza a página de login
  return (
    <main className="login">
      <LogoLogin />
      <div>
        <form onSubmit={e => submitLogin(e)} method="POST">
          <FormField
            type="text"
            placeholder="Nome de Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
            name="username" />
          <FormField
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password" />
          <a href="/redefine-password">Esqueci minha senha</a>
          <Button
            label="Entrar" />
        </form>
      </div>

    </main>
  );
}

export default FormLogin;
