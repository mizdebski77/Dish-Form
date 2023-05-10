import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    max-width: 500px;
    gap: 10px; 
    margin: 0 auto;
`;  

export const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 4px black;
    outline-color:${({theme}) => theme.color.mainColor} ;
`;

export const Select = styled.select`
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
    outline-color:${({theme}) => theme.color.mainColor} ;
`;

export const Option = styled.option`
    padding: 10px;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({theme}) => theme.color.mainColor};
    color: white;
    min-width: 200px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        transform: scale(1.03);
        
    }
`;

