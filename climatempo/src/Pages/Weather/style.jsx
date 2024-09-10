import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    place-content: center;
    height: 70vh;
    padding: 50px;
`

export const StyledIcon = styled.img`
    width: 120px;
    height: 120px;

`

export const StyledRow = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const StyledFont = styled.div`
    font-family: "Outfit", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: ${props => props.style};
    color: ${props => props.color};
    margin-right: 20px;
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 30px;
    background-color: cadetblue;
    padding: 20px;
`