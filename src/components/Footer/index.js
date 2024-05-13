import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocalIcons,
  SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import MushroomQuest from "../../mushromPictures/MushroomQuest.png";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {/* ❖ Mushroom Quest ❖ */}
            <SocialLogo to={"/"} onClick={toggleHome}>
              {" "}
              <img src={MushroomQuest} alt="Mushroom" />
            </SocialLogo>
            <WebSiteRights>
              {" "}
              All Right reserved. {new Date().getFullYear()}{" "}
            </WebSiteRights>
            <SocalIcons>
              <SocialIconLink
                href="https://github.com/arsalan2243"
                target="_blank"
                aria-label="Github"
              >
                <AiOutlineGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/arsalan-rahimi"
                target="_blank"
                aria-label="linkedin"
              >
                <AiFillLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://react-icons.github.io/"
                target="_blank"
                aria-label="React"
              >
                <FaReact />
              </SocialIconLink>
            </SocalIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
