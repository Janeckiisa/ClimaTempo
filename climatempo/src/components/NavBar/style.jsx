import styled from "styled-components";

export const StyledNav = styled.div`
    background-color: ${props=> props.color}; //#80bed1 #462d74
    height: 6vh;
    align-content: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 10px;
    flex-wrap: wrap;
`

export const StyledNavBar = styled.div`
    gap: 30px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
`

export const StyledItem = styled.div`
    color: ${prop => prop.color};
    font-size: 20px;
`

export const StyledFont = styled.div`
    font-family: "Outfit", sans-serif;
    font-weight: 400;
    font-style: normal;
`

export const StyledIcon = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`