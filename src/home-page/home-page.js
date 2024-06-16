import { React } from "react";
import Footer from "../footer/footer";
import BiReport from "./bi-report";
import useAuth from "../utils/check-auth";


/**
 * Página inicial do aplicativo.
 * Renderiza o relatório BI e o rodapé.
 * Redireciona para a página de login se o usuário não estiver autenticado ou se for o primeiro login.
 * 
 * @returns {JSX.Element} Página inicial.
 */

function HomePage() {

  const { currentUser, firstLogin } = useAuth();

  if (currentUser && firstLogin !== true) {
    return (
      <div>
        <BiReport />
        <Footer />
      </div>
    );
  }
}


export default HomePage;
