import axios from "axios";

/**
 * Cria uma instância do Axios para realizar requisições à API.
 * Configura o CSRF (Cross-Site Request Forgery) para segurança em aplicativos da web.
 */
const client = axios.create({
    baseURL: "http://growbpo.com.br/api",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    withCredentials: true
});

export default client;