import React from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigation: NavigateFunction = useNavigate()

    return <React.Fragment>
        <h1>Information page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum illo placeat porro. A amet dolor ipsam iusto
            nam provident, veritatis?</p>
        <button className="btn" onClick={() => navigation('/')}>Get back</button>
    </React.Fragment>
}