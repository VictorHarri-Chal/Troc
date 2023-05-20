import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
  NavIcon,
} from "./style";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [appName] = React.useState("Troc en Presqu'île");
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">{appName}</NavLogo>
          {/* <NavIcon></NavIcon> */}
          <NavBtn>
            <NavBtnLink to="/login">Se connecter</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
