import React from "react";
import Logout from "./logout";
import { useLocation } from "react-router-dom";
import ImgHeader from "../utils/imgs/grow-bpo-branco.png"
import './header.css'
import useAuth from "../utils/check-auth";
import useCompany from "./button-company";


/**
 * Componente de cabeçalho do aplicativo.
 * Exibe o logo do Grow BPO e, na página inicial, um seletor de empresa e o botão de logout.
 * 
 * @param {Function} handleCompanySelect - Função para lidar com a seleção da empresa.
 * @returns {JSX.Element} Componente de cabeçalho.
 */
function Header({ handleCompanySelect }) {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { companyNames } = useCompany();
  const { currentUser } = useAuth();


  return (
    <header>
      <a href="/">
        <img src={ImgHeader} alt="Logo Grow BPO" />
      </a>
      {isHomePage && currentUser && (
        <div className="bi_button">
          <select
            id="companySelect"
            onChange={(event) => handleCompanySelect(event.target.value)}
            className="bi_button"
            defaultValue="">
            <option value="" disabled hidden>
              Selecione uma empresa
            </option>
            {companyNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>
      )}
      <Logout />
    </header>
  );
}

export default Header;
