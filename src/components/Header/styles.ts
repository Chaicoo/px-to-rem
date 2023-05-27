import styled, { css } from "styled-components";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px;

    > a {
        font-size: 2rem;
        margin-left: 8px;
        color: var(--text);
        transition: opacity 0.2s;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const iconCSS = css`
    fill: var(--accent);
    width: 36px;
    height: 36px;
    margin-left: 1rem;
    margin-top: -8px;
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const SunIcon = styled(MdSunny)`
    ${iconCSS}
`;

export const MoonIcon = styled(BsMoonStarsFill)`
    ${iconCSS}
`;
