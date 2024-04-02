import React, { useState, useEffect } from "react";
import { Modal, Col, Input, MsgError } from "./style";

export function ModalLogin() {
  const [arrayUsers, setArrayUsers] = useState([
    { id: 1, user: "Jordan", senha: "teste" },
  ]);

  const [userName, setUserName] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const [mensagemError, setMensageError] = useState("");
  const [loading, setLoading] = useState("Entrar");

  useEffect(()=>{
    
  },[])

  const Logar = () => {
    const userExists = arrayUsers.some(
      (user) => user.user === userName && user.senha === senhaUser
    );
    if (userExists) {
      setLoading("Carregando...")
      localStorage.setItem("loggedInUser", userName);
      setTimeout(() => {
        window.location = "/";
      }, "5000");
    } else {
      setMensageError("Usuário ou senha inválidos.");
    }
  };

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeSenhaUser = (event) => {
    setSenhaUser(event.target.value);
  };

  return (
    <Modal>
      <Col>
        <Input
          type="text"
          placeholder="Usuário"
          value={userName}
          onChange={handleChangeUserName}
        />
      </Col>

      <Col>
        <Input
          type="password"
          placeholder="Senha"
          value={senhaUser}
          onChange={handleChangeSenhaUser}
        />
        <MsgError>
          <span>{mensagemError}</span>
        </MsgError>
      </Col>

      <Col>
        <button class="button-9" role="button" onClick={Logar}>
          {loading}
        </button>
      </Col>

      <Col>
        <button class="button-10" role="button">
          Criar conta
        </button>
      </Col>
    </Modal>
  );
}
