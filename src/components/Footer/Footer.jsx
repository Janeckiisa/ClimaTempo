//https://github.com/Janeckiisa

import { Link } from "react-router-dom";
import { StyledFont, StyledIcon, StyledItem, StyledNav, StyledNavBar } from "./style";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Footer() {
    const { header } = useContext(ThemeContext);

    return (
        <StyledNav color={header}>
            <StyledNavBar>
                <StyledItem color="white">
                    <StyledFont>Copyright ©2024 Janeckiisa</StyledFont>
                </StyledItem>
            </StyledNavBar>
            <Link to={"https://github.com/Janeckiisa"}>
                <StyledIcon src="/github.svg"/>
            </Link>
        </StyledNav>
    );
}
export default Footer