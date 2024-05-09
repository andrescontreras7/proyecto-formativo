import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { counterContext } from "../../context/CRMcontext";

const PrivateRoute = ({ children }) => {
    const { auth } = useContext(counterContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.token) navigate('/Home');
    }, [auth, navigate]);

    return auth.token ? children : null;
};

export default PrivateRoute;