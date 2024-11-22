import { Link } from "react-router-dom";
import { StyledFont, StyledIcon, StyledItem, StyledNav, StyledNavBar } from "./style";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function NavBar() {
    const {
        icon, setIcon,
        bg, setBg,
        header, setHeader,
        card, setCard,
        button, setButton
    } = useContext(ThemeContext);

    function handleTheme() {
        event.preventDefault();
        setHeader(header === "#80bed1" ? "#462d74" : "#80bed1");
        setCard(card === "#79a8d1" ? "#492258" : "#79a8d1");
        setIcon(icon === "/Dark.png" ? "/Light.png" : "/Dark.png");
        setBg(bg === "#fff" ? "#1c1a36" : "#fff");
        setButton(button === "#3e6e99" ? "#2f0a49" : "#3e6e99");
    }

    return (
        <StyledNav color={header}>
            <StyledNavBar>
                <StyledIcon src="/cloud.webp"/>
                <StyledItem color="white">
                    <StyledFont>Climatempo</StyledFont>
                </StyledItem>
            </StyledNavBar>
            <Link to={"/"}>
                <StyledIcon src="/search.png"/>
            </Link>
            <StyledIcon src={icon} onClick={() => {handleTheme()}}/>
        </StyledNav>
    );
}
export default NavBar