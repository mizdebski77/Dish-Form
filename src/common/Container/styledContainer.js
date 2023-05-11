import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 600px;   
    background: ${({ theme }) => theme.color.secondColor};
    color: ${({ theme }) => theme.color.mainColor};
    margin: 64px auto;
    box-shadow: 0 0 10px black;
    padding: 40px;
    border-radius: 10px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    text-align: center;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 24px;
    }
`;
