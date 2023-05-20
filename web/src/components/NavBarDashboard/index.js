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

const NavBarDashboard = () => {
  const [appName] = React.useState("Dashboard");
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">{appName}</NavLogo>
          {/* <NavIcon></NavIcon> */}
          <NavBtn>
            <NavBtnLink to="/ingredientform">Ajouter un produit</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBarDashboard;
