import React, { useState } from "react";
import Logo from "../../imagens/logotipo.png";
import {
Container
} from "./style";
import { ModalLogin } from "../../componentes/Modal_Login";



function Login() {

  const [nomeUser, setNomeUser] = useState("");

  return (
    <>
      <Container>
        <ModalLogin />
      </Container>
    </>
  );
}

export default Login;
