import useLogout from "../header/api-logout"
import { useEffect } from "react";


/**
 * Componente que realiza logout ao acessar a rota.
 * Utiliza o hook useLogout para efetuar o logout automaticamente ao acessar a rota.
 */
const UseRouteLogout = () => {

    const { submitLogout } = useLogout();

    useEffect(() => {
        /**
         * Simula o logout automaticamente ao montar o componente.
         */
        const simulateLogout = async () => {
            const fakeEvent = { preventDefault: () => { } };
            await submitLogout(fakeEvent);
        };

        simulateLogout();
    }, [submitLogout]);
}

export default UseRouteLogout


