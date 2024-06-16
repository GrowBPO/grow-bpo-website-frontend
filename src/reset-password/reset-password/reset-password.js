import { React } from "react";
import LogoLogin from "../../utils/logo";
import FormField from "../../utils/field-with-label";
import Button from "../../utils/button";
import useResetPassword from "./api-reset-password";


function FormResetPassword() {

  const { submitPassword, newPassword, setNewPassword, confirmPassword, setConfirmPassword } = useResetPassword();

  // Se o usuário não estiver logado renderiza a página de esqueci minha senha
  return (
    <main className="login">
      <LogoLogin />
      <form onSubmit={e => submitPassword(e)} method="POST">
        <FormField
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          name="new-password"
          id="new-password"
          label="Insira a nova senha:" />
        <FormField
          type="password"
          placeholder="Confirme a nova senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          name="confirm-password"
          id="confirm-password"
          label="Insira a confirmação da nova senha:" />
        <a href="/login">Voltar para a página de login</a>
        <Button
          label="Redefinir Senha" />
      </form>

    </main>
  );
}

export default FormResetPassword;