import styled from "styled-components";

export const Container = styled.div`
    > h1 {
        margin-top: 60px;
        font-size: 48px;
        text-align: center;
        color: var(--text);
        margin-bottom: 30px;
    }

    > p {
        font-size: 18px;
        line-height: 1.4rem;
        text-align: justify;
        color: var(--text);
        width: 40%;
        margin: 0 auto;
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
        align-items: center;
        color: var(--text);
    }
`;

export const Table = styled.table`
    width: 20%;
    margin: 0 auto;
    margin-top: 30px;
    border-collapse: collapse;
    border-spacing: 0;
    color: var(--text);

    > thead {
        th{
            border: 1px solid #262525;
            padding: 4px;
        }
    }

    td{
        padding: 4px;
        text-align: center;
        border: 1px solid #262525;
    }
`;
