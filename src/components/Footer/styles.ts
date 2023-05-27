import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    margin-top: auto;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--card);
`;

export const MadeBy = styled.div`
    font-size: 14px;
    color: var(--text);
    margin-top: 24px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    > a {
        transition: opacity 0.2s;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const HeartIcon = styled(AiFillHeart)`
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    fill: var(--accent);
`;
