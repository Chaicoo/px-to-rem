import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    ContainerLinks,
    ContainerInputs,
    SwitchIcon,
    Input,
} from "./styles";

export const RemToPx: React.FC = () => {
    const [remValue, setRemValue] = useState("");
    const [pixelValue, setPixelValue] = useState("");

    const handleRemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setRemValue(inputValue);

        const pixel = parseFloat(inputValue) * 16;
        const formattedPixel = Number.isInteger(pixel)
            ? pixel.toFixed(0)
            : pixel.toFixed(2);
        setPixelValue(formattedPixel);
    };

    return (
        <Container>
            <h1>Converta REM para Pixel</h1>
            <ContainerInputs>
                <Input>
                    <span>REM</span>
                    <input
                        type="text"
                        placeholder="Digite o valor em REM"
                        value={remValue}
                        onChange={handleRemChange}
                    />
                </Input>
                <Link to="/pxtorem">
                    <SwitchIcon />
                </Link>
                <Input>
                    <span>Pixel</span>
                    <input
                        type="text"
                        placeholder="Equivalente em Pixel"
                        value={pixelValue}
                        readOnly
                    />
                </Input>
            </ContainerInputs>

            <ContainerLinks>
                <Link to="/">Ínicio</Link>
            </ContainerLinks>
        </Container>
    );
};
