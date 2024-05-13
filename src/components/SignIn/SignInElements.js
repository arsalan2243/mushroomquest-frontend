import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  //overflow: hidden;
  background: rgb(0, 0, 0);




`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

@meida screen and (max-width: 480 px) {
  height: 80%;
  margin-top: 10px;
}
`;

export const Icon = styled(Link)`
  color: inherit; /* Change 'inherit' to whatever color value you want */
  font-weight: bold;
  font-size: 32px;
  padding: 0 7px;
  margin-top: 42px;
  
  img {
    width: 100px; /* Set the width of the image to 100px */
  }

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
  }
`;


export const FormContent = styled.div`
height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

export const Form = styled.form`
    background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display:grid;
  margin:0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0 0.9);
  @media screen and (max-width: 480px) {
    padding: 10px;
  }

`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
  color: white;
  font-size: 20px;
  font-weight:bold;
  text-align: center;
  


`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
color: white;
`;

export const FormInput = styled.input`
padding:16px 16px;
  margin-bottom:32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
background-color: #01bf71;
  padding:16px 0;
  border:none;
  border-radius:4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    background-color:gray;
  }
`;

export const Text = styled.p`
    text-align: center;
  margin-top: 24px;
  color: white;
  font-size: 14px;
  cursor: pointer;

`;

export const Errors = styled.p`
  color: #ff0e0e;
  font-weight: bold;
margin-bottom:10px;
  
`;


export const ErrorsP = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #ff0e0e;;
  font-weight: bold;
  margin-bottom: 10px;

`;