import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export const Home: React.FC = () => {
    return (
        <Container>
            <h1>Home page</h1>
            <Link to="/pxtorem">Px to Rem</Link>
            <Link to="/remtopx">Rem to Px</Link>
        </Container>
    );
};