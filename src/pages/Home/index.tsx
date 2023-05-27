import React from "react";
import { Link } from "react-router-dom";

import { Container, ContainerLinks, Table } from "./styles";

export const Home: React.FC = () => {
    return (
        <Container>
            <h1>Pixel to REM</h1>
            <p>
                O rem é uma unidade de medida CSS relativa ao tamanho da fonte
                do elemento raiz (16px). Ao contrário do px e do em, o rem não é
                afetado pelo tamanho da fonte dos elementos pai, tornando-o
                ideal para layouts responsivos. Com o rem, é possível criar
                designs consistentes e adaptáveis, ajustando os tamanhos com
                base em uma escala global. Isso facilita a alteração do tamanho
                da fonte em toda a aplicação sem modificar cada elemento
                individualmente. O rem oferece uma abordagem escalável e
                flexível para o dimensionamento de elementos em CSS.
            </p>
            <Table>
                <thead>
                    <tr>
                        <th>Pixel</th>
                        <th>REM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>16px</td>
                        <td>1rem</td>
                    </tr>
                    <tr>
                        <td>24px</td>
                        <td>1.5rem</td>
                    </tr>
                    <tr>
                        <td>32px</td>
                        <td>2rem</td>
                    </tr>
                </tbody>
            </Table>

            <ContainerLinks>
                <Link to="/pxtorem">Px to Rem</Link>
                <Link to="/remtopx">Rem to Px</Link>
            </ContainerLinks>
        </Container>
    );
};
