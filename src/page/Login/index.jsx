import React from "react";
import Logo from "../../imagens/logoNovo.png";
import {
  Container,
  ComponentDark,
  ComponentWhite,
  ComponentLogotipoLogin,
  ComponentImage,
} from "./style";
import { ModalLogin } from "../../componentes/ModalLogin";

function Login() {
  return (
    <>
      <Container>
        <ComponentDark>
          <ComponentLogotipoLogin>
            <ComponentImage src={Logo} />
          </ComponentLogotipoLogin>
        </ComponentDark>
        <ComponentWhite>
          <ModalLogin />
        </ComponentWhite>
      </Container>
    </>
  );
}

export default Login;
