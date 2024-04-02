import React from "react";
import { Container, Formulario, Cols, Col, Input } from "./style";

function MeusDados() {
  return(
    <Container>
    <Formulario>
      <Cols>
        <Col>
        <span>Nome</span>
          <Input type="text"/>
        </Col>
        <Col>
        <span>Sobrenome</span>
          <Input type="text"/>
        </Col>
        <Col>
        <span>CPF</span>
          <Input type="text"/>
        </Col>
      </Cols>
    </Formulario>
  </Container>
  )
}

export default MeusDados;
