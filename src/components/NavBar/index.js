import React from "react";
import { useHistory } from "react-router-dom";
import {
  Nav,
  NavLinksR,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import MushroomQuest from "../../mushromPictures/MushroomQuest.png";

const NavBar = ({ toggle }) => {
  const { push } = useHistory();
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    push("/");
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to={"/"} onClick={toggleHome}>
            <img src={MushroomQuest} alt="mushroomQuest" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                to={"about"}
              >
                {" "}
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact={"true"}
                to={"services"}
              >
                {" "}
                Services
              </NavLinks>
            </NavItem>
            {token ? (
              <NavItem>
                <NavLinksR
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={"true"}
                  to={"/sliders"}
                >
                  {" "}
                  Mushrooms
                </NavLinksR>
              </NavItem>
            ) : null}
          </NavMenu>

          <NavBtn>
            {token ? (
              <NavBtnLink onClick={logout}>Logout</NavBtnLink>
            ) : (
              <NavBtnLink to={"/signIn"}>Sign In</NavBtnLink>
            )}
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
