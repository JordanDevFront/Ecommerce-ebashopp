import styled from "styled-components";

export const Botao = styled.div``;

export const BtnAdicionarCarrinho = styled.button`
  all: unset;
  width: 158px;
  height: 20px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: black;
  cursor: pointer;
  z-index: 1;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #ffe600;
    border-radius: 6px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;

export const Espaco = styled.br``;