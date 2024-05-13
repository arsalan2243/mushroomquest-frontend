import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Icon = styled(Link)`
  color: inherit; /* Change 'inherit' to whatever color value you want */
  font-weight: bold;
  font-size: 32px;
  padding: 0 7px;
  
  img {
    width: 100px; /* Set the width of the image to 100px */
  }

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
  }
`;
