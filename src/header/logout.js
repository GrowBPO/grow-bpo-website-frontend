import { React } from "react";
import useLogout from "./api-logout";
import useAuth from "../utils/check-auth";
import ImgLogout from "../utils/imgs/logout.png";
import 'react-toastify/dist/ReactToastify.css';


/**
 * Componente de logout.
 * Renderiza um botão de logout apenas se o usuário estiver autenticado.
 * 
 * @returns {JSX.Element} Componente de logout.
 */

function Logout() {

  const { currentUser } = useAuth();
  const { submitLogout } = useLogout();

  if (currentUser) {
    return (
      <form onSubmit={e => submitLogout(e)} method="POST">
        <button className="button-logout">
          <img src={ImgLogout} alt="Logo Grow BPO" className="header__img_logout" />
        </button>
      </form>
    )
  }
}

export default Logout;
