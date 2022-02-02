import styled from "styled-components";

export const Input = styled.input`
    margin: 10px;
    width: 200px;
    height: 30px;
    padding: 0 5px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 7px;
    &:focus{
        border-color: rgb(26, 26, 190);
        box-shadow: 0 0 10px #719ECE
    }
`;