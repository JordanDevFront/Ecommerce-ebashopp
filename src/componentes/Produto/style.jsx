import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;
export const Card = styled.div`
  width: 200px;
  height: 450px;
  background: #fff;
  margin: 20px;
  padding: 10px;
`;
export const Controle = styled.div`
  width: 100%;
  height: 30px;
  margin: 5px;
`;
export const Favorito = styled.div`
  width: 50px;
  height: 30px;
  float: right;
  text-align: center;
  cursor: pointer;

  .icon-font-color {
    font-size: 29px;
  }
`;
export const Slide = styled.div`
  width: 200px;
  height: 200px;
`;
export const Imagem = styled.img`
  width: 100%;
`;
export const ComponenteDescricaoProd = styled.label`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: rgba(0, 0, 0, 0.9);
  display: -webkit-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 12px;
  max-height: 50px;
  overflow: hidden;
  text-decoration: none;
`;
export const ComponentePreco = styled.div`
  margin-top: 20px;
`;
export const ComponentePrecoAntigo = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
  line-height: 1.25;
  text-decoration: line-through;
  margin: 15px 0;
`;
export const ComponentePrecoProd = styled.strong`
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  margin: 15px 0;
`;
export const ComponenteParcelamento = styled.div``;
export const ComponenteDadosParcelamento = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
  line-height: 1.25;
  color: #00a650;
`;
export const Info = styled.div`
  padding: 10px;

  label {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgba(0, 0, 0, 0.9);
    display: -webkit-box;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 12px;
    max-height: 50px;
    overflow: hidden;
    text-decoration: none;
  }
`;
