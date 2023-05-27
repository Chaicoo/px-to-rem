import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px;

    > .tittle {
        font-size: 24px;
        margin-left: 8px;
        color: var(--text);
    }
`;

export const SunIcon = styled(BsFillSunFill)`
    fill: var(--accent);
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const MoonIcon = styled(BsFillMoonFill)`
    fill: var(--accent);
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
