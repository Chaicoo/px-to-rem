import styled, { css } from "styled-components";
import { FiRefreshCw } from "react-icons/fi";

export const Container = styled.div`
    > h1 {
        margin-top: 60px;
        font-size: 48px;
        text-align: center;
        color: var(--text);
        margin-bottom: 30px;
    }
`;

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    > a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        color: var(--text);
        padding: 4px;
        border-radius: 4px;
        border: 2px solid #262525;
        transition: all 0.2s;

        &:hover {
            background-color: var(--text);
            color: var(--background);
        }
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    > a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    > span {
        font-size: 20px;
        color: var(--text);
    }

    > input {
        width: 350px;
        height: 40px;
        border-radius: 4px;
        border: 2px solid #262525;
        padding: 0 10px;
        font-size: 16px;
        text-align: center;
        color: var(--text);

        &:focus {
            outline: none;
        }
    }
`;

const iconCSS = css`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    stroke: var(--text);
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const SwitchIcon = styled(FiRefreshCw)`
    ${iconCSS}
    margin-top: 36px;
`;