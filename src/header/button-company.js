import { useState, useEffect } from "react";
import client from "../utils/api-config";
import { toast } from 'react-toastify';


/**
 * Hook customizado para gerenciamento das empresas do usuário.
 * Obtém os nomes das empresas, o link do dashboard da empresa selecionada e os dados completos das empresas do usuário.
 * 
 * @returns {object} Objeto contendo os nomes das empresas e os dados completos das empresas do usuário.
 */
const useCompany = () => {

  // Estado para armazenar os nomes das empresas, o link do dashboard da empresa selecionada e os dados completos das empresas do usuário.
  const [companyNames, setCompanyNames] = useState([]);
  const [userCompanies, setUserCompanies] = useState([]);
  

  // Hook para buscar os dados das empresas do usuário ao montar o componente
  useEffect(() => {
    const fetchData = async () => {

      try {
        const res = await client.get("/auth/user");
        const id_user = res.data.user.id;
        const response = await client.get(`/bi/user-company/${id_user}`);

        if (response.data && response.data.user_companies) {
          const names = response.data.user_companies
            .filter(company => company.company_name !== null && company.is_active !== false)
            .map(company => company.company_name);
          setCompanyNames(names);

          const data = response.data.user_companies;
          setUserCompanies(data);
        }
      } catch (error) {
        const res = await client.get("/auth/user/check")
        if(res === "true"){
          toast.error("Ocorreu um erro ao obter os dados das empresas. Tente novamente!");
        }
      }
    }

    fetchData();
  }, []);



  // Retorna um objeto contendo os nomes das empresas e os dados completos das empresas do usuário
  return { companyNames, userCompanies }
}

export default useCompany;

