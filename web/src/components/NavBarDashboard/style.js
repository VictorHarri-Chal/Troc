import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 28px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  font-family: "Aladin", cursive;
  text-decoration: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: lightblue;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Aladin", cursive;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavIcon = styled.li`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  margin: 15px;
  border-radius: 20%;
  border: solid 0px #000;
  background-color: #fff;
  position: relative;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    svg {
      color: ${(props) => props.color};
    }
  }

  svg {
    width: 45px;
    height: 45px;
    color: #000;
  }
`;
