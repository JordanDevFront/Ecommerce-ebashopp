import React, { useState, useEffect } from "react";
import { Modal, Col, Input, MsgError } from "./style";
import InputMask from 'react-input-mask';
import CryptoJS from "crypto-js";

export function ModalLogin() {
  const [arrayUsers, setArrayUsers] = useState([
    { id: 1, cpf: "44740347830", nome: "Henrique", senha: "teste" },
  ]);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [encryptedCpf, setEncryptedCpf] = useState("");
  const [token, setToken] = useState("ainda vou gerar o token no back-end");
  const [auth, setAuth] = useState(true);
  const [mensagemError, setMensagemError] = useState("");
  const [loading, setLoading] = useState("Entrar");

  const CHAVE_KEY = "Fg@A~t34#";

  useEffect(() => {
    // Aqui você pode adicionar lógica para verificar a autenticação do usuário
  }, []);

  const cpfIsValid = (cpf) => {
    return cpf.length === 11;
  };

  const Logar = () => {
    const userExists = arrayUsers.some(
      (user) => user.cpf === cpf && user.senha === senha
    );

    if (!cpfIsValid(cpf)) {
      alert("CPF inválido");
      return;
    }

    if (userExists) {
      setLoading("Carregando...");
      // Criptografa o CPF antes de armazenar
      const encrypted = CryptoJS.AES.encrypt(cpf, CHAVE_KEY).toString();
      setEncryptedCpf(encrypted);

      const user = arrayUsers.find((user) => user.cpf === cpf);
      localStorage.setItem("documento", encrypted);
      localStorage.setItem("auth", auth);
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", user.nome);
      setTimeout(() => {
        window.location = "/";
      }, 5000);
    } else {
      setMensagemError("Usuário ou senha inválidos.");
    }
  };

  const handleChangeUserCPF = (event) => {
    // Remove os caracteres do CPF
    const cpfFormatted = event.target.value.replace(/\D/g, '');
    setCpf(cpfFormatted);
  };

  const handleChangeUserSenha = (event) => {
    setSenha(event.target.value);
  };

  return (
    <Modal>
      <Col>
        <InputMask 
          mask="999.999.999-99"
          type="text"
          placeholder="Usuário"
          value={cpf}
          onChange={handleChangeUserCPF}
          id="InputCPF"
        />
      </Col>

      <Col>
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={handleChangeUserSenha}
        />
        <MsgError>
          <span>{mensagemError}</span>
        </MsgError>
      </Col>

      <Col>
        <button className="button-9" role="button" onClick={Logar}>
          {loading}
        </button>
      </Col>

      <Col>
        <button className="button-10" role="button">
          Criar conta
        </button>
      </Col>
    </Modal>
  );
}
