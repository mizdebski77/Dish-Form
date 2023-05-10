import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 600px;   
    background: ${({ theme }) => theme.color.secondColor};
    color: ${({ theme }) => theme.color.mainColor};
    margin: 64px auto;
    box-shadow: 0 0 10px black;
    padding: 40px;
    border-radius: 10px;
`;

export const Title = styled.h1`
    text-align: center;
`;
