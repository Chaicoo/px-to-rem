import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

export const RemToPx: React.FC = () => {
  return (
    <Container>
        <h1>Converta Pixel para REM</h1>
        <Link to="/">Home</Link>
        <Link to="/pxtorem">PxToRem</Link>
    </Container>
  );
}
