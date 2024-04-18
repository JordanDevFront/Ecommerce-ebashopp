import styled, { keyframes,css  } from "styled-components";

export const HeaderCSS = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 5px;
padding: 5px;
background: #ffe600;
position: fixed;
width: 100%;
z-index: 2;
margin: 0;
top: 0px;

  .font-size {
    font-size: 30px;
    position: relative;
    left: 8px;
  }

  .font-size-user {
    font-size: 30px;
  }
`;
export const Logotipo = styled.div`
  width: 300px;
  text-align:center;

  a{
    img{
      width:80%;
      height: 50px;
      position: relative;
      top: 15px;
    }
  }
`;
export const Info = styled.div`
  width: 300px;
  display: flex;
  position: relative;
  top: 0;
  z-index: 2;

  /**background: #ffffffd1;*/
  padding: 10px 20px;
  /**box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;*/
`;

export const ComponentPesquisa = styled.div`
width: 650px;
height: 80px;
`
export const Cart = styled.a`
  width: 40px;
  height: 40px;
  background: #ffde6d;
  border-radius: 40px;
  margin: 5px;
  border: 4px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
    color: #001F3F;

  span {
    width: 20px;
    height: 16px;
    background: red;
    border-radius: 20px;
    position: relative;
    top: -20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
`;
export const Fav = styled.div`
  width: 40px;
  height: 40px;
  background: #ffde6d;
  border-radius: 40px;
  margin: 5px;
  border: 4px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    width: 20px;
    height: 16px;
    background: red;
    border-radius: 20px;
    position: relative;
    top: -20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
`;
export const User = styled.div`
  width: 40px;
  height: 40px;
  background: #ffde6d;
  border-radius: 40px;
  margin: 5px;
  border: 4px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    color: #001F3F;
  }
`;
export const BtnEnter = styled.div`
  a {
    position: relative;
    top: 18px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin-left: 10px;
  }
`;
export const BtnCriar = styled.div`
  a {
    position: relative;
    top: 18px;
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
`;
export const NomeUser = styled.div`
  label {
    position: relative;
    top: 10px;
    text-decoration: none;
    color: #001F3F;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: #001F3F;
  }
`;
export const Controller = styled.div`
  position: absolute;
  z-index: 2;
  width: 87.5%;

  .info {
    padding: 10px 20px;
    width: 100px;
    float: right;
    text-align: left;
    border-radius: 8px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position:relative;
    top: 60px;
    left: 5px;

    a {
      text-decoration: none;
      color: black;
      font-size: 12px;
    }
    a:hover {
      font-weight: 700;
    }
  }

  .info::before {
    content: "";
    position: absolute;
    top: -10px; /* Posiciona a seta 20px acima da div */
    right: 10px; /* Posiciona a seta 10px da borda direita */
    border-left: 10px solid transparent; /* Define a largura e a cor da borda esquerda */
    border-right: 10px solid transparent; /* Define a largura e a cor da borda direita */
    border-bottom: 10px solid #f0f0f0; /* Define a largura e a cor da borda inferior */
  }
`;
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
export const ModalFavorito = styled.div`
position: fixed;
right: 0;
top: 89px;
transform: translateY(-50%);
background-color: #ffffffd1;
padding: 20px;
animation: ${({ isVisible }) =>
  isVisible
    ? css`
        ${slideIn} 0.5s ease-in-out forwards`
    : 'none'};
display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
backdrop-filter: blur(10px); /* Efeito de vidro */

  z-index: 2;
  width: 400px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const VisbibleIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const ComponentMenuBurger = styled.div`
position: fixed;
right: 0;
transform: translateY(-50%);
background: #ffe600;
animation: ${({ isVisible }) =>
  isVisible
    ? css`
        ${VisbibleIn} 0.5s ease-in-out forwards`
    : 'none'};
display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  z-index: 2;
  width: 320px;
  height: 100vw;
`

export const ComponentPadding = styled.div`
padding:10px;

label{
  margin:10px;
}
`
export const Card = styled.div`
display:flex;
width: 390px;
height: 100%;
padding: 5px;
background: #fff;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
z-index:2;
margin:10px 0;
`
export const Imagem = styled.div`
width: 120px;
height: 120px;
margin:5px;
`
export const Img = styled.img`
width:100%;
`
export const Inform = styled.div`
padding:5px;

span{
  font-size: 12px;
  color: rgba(0, 0, 0, .55);
  font-weight: 400;
  line-height: 1.25;
  color: #00a650;
}

label{
  font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
}
`
export const DesktopComponent = styled.div`
`
export const MobileComponent = styled.div`
`
export const HeaderMobileCSS = styled.div`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 5px;
  background: #ffe600;
`;
export const MenuCoponent = styled.div`
display:flex;
justify-content: right;
`

export const ComponentInfo = styled.div`
display:flex;
`
export const MenuItem = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  .font {
    font-size: 36px;
    margin: 10px;
  }
`;