import styled from "styled-components";

export const StyledContainer = styled.form`
    background-color: #79a8d1;
    padding: 30px;
    place-content: center;
    place-items: center;
    text-align: center;   
    width: 20%;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    gap: 30px;
    min-width: 210px;
`

export const StyledInput = styled.input`
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    height: 10px;
    background-color: #d8e4fa;
    color: #1b4172;
    border: none;
    font-weight: bold;

    &::placeholder{
        color: #7ca7cc;
        font-weight: lighter;
    }
`

export const StyledButton = styled.button`
    width: 50%;
    border: none;
    height: 30px;
    border-radius: 5px;
    background-color: #3e6e99;
    cursor: pointer;
    color: #fff;

    &:hover{
        background-color: #508ec4;
    }
`