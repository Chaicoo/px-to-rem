import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    ContainerLinks,
    ContainerInputs,
    SwitchIcon,
    Input,
} from "./styles";

export const PxToRem: React.FC = () => {
    const [pixelValue, setPixelValue] = useState("");
    const [remValue, setRemValue] = useState("");

    const handlePixelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setPixelValue(inputValue);

        const rem = parseFloat(inputValue) / 16;
        const formattedRem = Number.isInteger(rem)
            ? rem.toFixed(0)
            : rem.toFixed(2);
        setRemValue(formattedRem);
    };

    return (
        <Container>
            <h1>Converta Pixel para REM</h1>

            <ContainerInputs>
                <Input>
                    <span>Pixel</span>
                    <input
                        type="text"
                        placeholder="Digite o valor em Pixel"
                        value={pixelValue}
                        onChange={handlePixelChange}
                    />
                </Input>
                <Link to="/remtopx">
                    <SwitchIcon />
                </Link>
                <Input>
                    <span>REM</span>
                    <input
                        type="text"
                        placeholder="Equivalente em REM"
                        value={remValue}
                        readOnly
                    />
                </Input>
            </ContainerInputs>

            <ContainerLinks>
                <Link to="/">Início</Link>
            </ContainerLinks>
        </Container>
    );
};
