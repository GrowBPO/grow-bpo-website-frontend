import { React, useState } from "react";
import Header from '../header/header'
import './bi-report.css'
import { toast } from "react-toastify";
import useCompany from "../header/button-company";




/**
 * Componente para exibir o relatório BI.
 * Renderiza o cabeçalho, e se a empresa estiver selecionada, exibe o relatório BI em um iframe.
 * 
 * @returns {JSX.Element} Componente do relatório BI.
 */
function BiReport() {

  const [selectedCompanyLink, setSelectedCompanyLink] = useState("");
  const { userCompanies } = useCompany();

  // Função para lidar com a seleção de empresa
  const handleCompanySelect = (selectedCompanyName) => {
    const selectedCompany = userCompanies.find(company => company.company_name === selectedCompanyName);
    if (selectedCompany && selectedCompany.link_dashboard) {
      setSelectedCompanyLink(selectedCompany.link_dashboard)
    } else {
      toast.error("O dashboard da empresa não está disponível. Contate o administrador.");
      setSelectedCompanyLink("");
    }
  }


  // Renderiza o componente do relatório BI
  return (
    <div>
      <Header handleCompanySelect={handleCompanySelect} />
      <main className="bi__report__main">
        {selectedCompanyLink && (
          <div className="bi__report">
            <iframe
              id="powerBiIframe"
              title="Tecnologias Sociais"
              style={{ width: "100%", height: "92vh", border: "none" }}
              src={selectedCompanyLink}
              allowFullScreen={true}
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
}

export default BiReport;