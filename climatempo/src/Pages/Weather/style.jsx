import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    place-content: center;
    height: 90vh;
`

export const StyledIcon = styled.img`
    width: 150px;
    height: 150px;

`

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
`

export const StyledFont = styled.div`
    font-family: "Outfit", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: ${props => props.style};
    color: ${props}
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 60vh;
    width: 80vw;
    border-radius: 30px;
    background-color: cadetblue;
`