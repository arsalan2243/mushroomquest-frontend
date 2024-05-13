import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #101522;

`;
export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`;



export const SocialMedia = styled.section`
  max-width: 1000px;
  width:100%;
`;


export const SocialMediaWrap = styled.div`
    display: flex;
  justify-content:space-between;
  align-items:center;
  max-width: 1100px;
  
  @media screen and (max-width:820px){
    flex-direction: column;
    
  }
`;

export const SocialLogo = styled.div`
  color: white;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom:7px;
  font-weight: bold;
  
  img {
    width: 150px; /* Set the width of the image to 150px */
  }
`;
export const WebSiteRights = styled.small`
  color: white;
  margin-bottom:7px;
  
`;

export const SocalIcons = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  

`;
export const SocialIconLink = styled.a`
  color: white;
  font-size: 2rem;
  
`;
