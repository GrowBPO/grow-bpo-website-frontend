import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../header/api-logout';

const RouteLogout = () => {
    const { submitLogout } = useLogout();
    const navigate = useNavigate();

    useEffect((e) => {
        submitLogout();
    }, [submitLogout]);

    return (
        navigate('/login')
    );
};

export default RouteLogout;
