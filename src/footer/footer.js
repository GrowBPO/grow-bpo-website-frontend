import './footer.css'
import React from "react";
import { URLs } from "./urls";
import ImgFooter from "../utils/imgs/grow-bpo-branco.png"
import ImgInstagram from "../utils/imgs/instagram.png"
import ImgLinkedin from "../utils/imgs/linkedin.png"


/**
 * Componente de rodapé do aplicativo.
 * Exibe informações da empresa, links de contato e redes sociais.
 * 
 * @returns {JSX.Element} Componente de rodapé.
 */
const Footer = React.memo(() => {
    return (
        <footer>
            <div>
                <img src={ImgFooter} alt="Logo Grow BPO" />
                <address>
                    <p>Grow Bpo e Gestão Financeira LTDA</p>
                    <p>CNPJ 52.899.702/0001-52 - Brasília/DF</p>
                </address>
            </div>
            <a href={URLs.whatsapp} target="_blank" rel="noreferrer" aria-label="Fale Conosco Pelo WhatsApp">Fale Conosco Pelo WhatsApp</a>
            <a href={URLs.meeting} target="_blank" rel="noreferrer" aria-label="Agende uma Reunião">Agende uma Reunião</a>
            <ul>
                <p>Acompanhe nas Redes:</p>
                <li>
                    <a href={URLs.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                        <img src={ImgInstagram} alt="Logo Instagram" className="footer__social_media" />
                    </a>
                </li>
                <li>
                    <a href={URLs.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                        <img src={ImgLinkedin} alt="Logo Linkedin" className="footer__social_media" />
                    </a>
                </li>
            </ul>
        </footer>
    );
});


export default Footer;
