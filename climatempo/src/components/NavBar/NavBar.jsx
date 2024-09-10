import { StyledFont, StyledIcon, StyledItem, StyledNav, StyledNavBar } from "./style";

import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    return (
        <StyledNav>
            <StyledNavBar>
                <StyledIcon src="/cloud.webp"/>
                <StyledItem color="white">
                    <StyledFont>Climatempo</StyledFont>
                </StyledItem>
            </StyledNavBar>
            <StyledIcon src="/search.png"/>
            <StyledIcon src="/Dark.png"/>
        </StyledNav>
    );
}
export default NavBar