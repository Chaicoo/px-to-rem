import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

export const PxToRem: React.FC = () => {
  return (
    <Container>
        <h1>Converta REM para Pixel</h1>
        <Link to="/">Home</Link>
        <Link to="/remtopx">RemToPx</Link>
    </Container>
  );
}
