import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  position: relative;
  top: 91px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
`;

export const ListItem = styled.div`
  width: 70%;
  height: 400px;
  background: #f7f7f7f2;
  margin: 5px;
  border-radius: 8px;
  
`;

export const InfoPage = styled.div`
  width: 30%;
  height: 400px;
  background: #ffe600;
  margin: 5px;
  border-radius: 8px;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Item = styled.div`
  display: flex;
  width: 98%;
  height: 130px;
  background: #fff;
  margin: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const Image = styled.div`
  width: 120px;
  height: 120px;
  padding: 5px;
`;
export const Img = styled.img`
  width: 100%;
`;

export const ComponenteDescricao = styled.div`
  width: 100%;
  height: 120px;
  padding: 5px;
`;

export const ComponenteTitulo = styled.div`
  padding: 50px 8px;
`;

export const TextoForte = styled.strong``;
export const Valor = styled.span`
  padding: 0 50px;
`;

export const ComponenteModal = styled.div`
  display: flex;
  padding: 50px 8px;
`;

export const ComponenteControlador = styled.div`
  width: 82px;
`;
export const ComponenteBotao = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #999999;
  background: #d1d1d1;
  text-align: center;
`;
export const BotaoMenor = styled.div`
  cursor: pointer;
`;
export const ComponenteQuantidade = styled.div`
  width: 30px;
  height: 20px;
  text-align: center;
`;
export const Quantidade = styled.span``;
export const BotaoMais = styled.div`
  cursor: pointer;
`;

export const ComponenteExcluir = styled.div`
  padding: 50px 40px;
  text-align: center;
  color: #666464;
  cursor: pointer;
`;
export const BotaoExcluir = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #a9a8a8;
  border-radius: 20px;
  background: #ededed;
`;

export const ComponenteDetalhes = styled.div`
margin:10px;
`;
export const ComponenteDetalheDaCompra = styled.span``;
export const ComponenteBotaoFinalizar = styled.div``;
export const BotaoFinalizar = styled.div`
padding: 10px 20px;
text-align: center;
border-radius: 4px;
margin: 10px;
background: #313232;
color: #fff;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
cursor: pointer;
`;

export const Produtos = styled.div`
width:100%;
`;
export const ComponenteCol = styled.div`
display:flex;
margin:10px;

`
export const Col = styled.div`
width:100%;

span{
  font-size: 20px;
font-weight: 700;
color: #313232;

}
`
export const ColItem = styled.div`
width:100%;
text-align: right;
font-size: 20px;
font-weight: 700;
color: #313232;
`

export const ColFrete = styled.div`
width:100%;
font-size: 16px;
font-weight: 300;
color: #626262;
`
