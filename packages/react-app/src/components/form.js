import styled from "styled-components";
export const Container= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:400px;
    margin-top:100px;
`;
export const Button =styled.button`
    background-color: #827EFE;
    text-decoration:none;
    border-radius:5rem;
    font-size:20px;
    border:none;
    margin-top: 20px;
    color: #fff;
    width: 100px;
    height: 55px;
`;
export const Input = styled.input`
        font-size: 20px;
        height: 55px;
        margin-top: 20px;
        padding: 0 35px;
        width: 100%;
        background-color: #fff !important;
        font-family: inherit;
        border: solid 0.1px #D3D3D3;
        font-weight: inherit;
        border-radius: 5rem;
      }
      ::placeholder {
        color: #9695A8;
      }
      :focus {
        outline: none;
      }
      
`;
export const Required = styled.div`
    font-size:15px;
`;