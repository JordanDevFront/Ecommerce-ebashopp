import React, { useState } from "react";
import {
  ComponentModals,
  ComponentPequeno,
  ComponentYeloow,
  ComponentText,
  ComponentBtn,
  Botao,
  ComponentBemVindo,
  ComponentBollDark,
  ComponentModalVidro,
  ComponentFormLogin,
  ComponentFormCadastro,
  CamponentCamp,
  ComponentBotaoEnviar,
  CamponentBotaoPost,
  CamponentBotaoPostLogin,
  ComponentBolYellow,
  MsgError,
} from "./styleleGlobal";

import InputMask from "react-input-mask";
import CryptoJS from "crypto-js";
import { CiLogin, CiSaveUp2 } from "react-icons/ci";

export function ModalLogin() {
  const [arrayUsers, setArrayUsers] = useState([
    { id: 1, cpf: "44740347830", nome: "Henrique", senha: "teste" },
  ]);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [encryptedCpf, setEncryptedCpf] = useState("");
  const [token, setToken] = useState("ainda vou gerar o token no back-end");
  const [auth, setAuth] = useState(true);
  const [mensagemError, setMensagemError] = useState("");
  const [loading, setLoading] = useState("Entrar");

  const CHAVE_KEY = "Fg@A~t34#";
  const [login, setLogin] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Registre-se");
  const [textoBtnEnviar, setTextoBtnEnviar] = useState("Enviar");

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
    const cpfFormatted = event.target.value.replace(/\D/g, "");
    setCpf(cpfFormatted);
  };

  const handleChangeUserSenha = (event) => {
    setSenha(event.target.value);
  };
  const abrirCadastro = () => {
    if (!modalAberto) {
      setModalAberto(true);
      setLogin(false);
      setTextoBotao("Logar");
    } else {
      setModalAberto(false);
      setLogin(true);
      setTextoBotao("Registre-se");
    }
  };

  const FormularioCadastro = () => {
    return (
      <ComponentFormCadastro>
        <CamponentCamp>
          <span>Usuário</span>
          <br />
          <InputMask
            mask="999.999.999-99"
            type="text"
            placeholder="000.000.000-00"
            className="input"
            id="InputCPF"
          />
        </CamponentCamp>

        <CamponentCamp>
          <span>Email</span>
          <br />
          <input
            type="text"
            placeholder="algumaCoisa@gmail.com"
            className="input"
          />
        </CamponentCamp>

        <CamponentCamp>
          <span>Senha</span>
          <br />
          <input type="password" placeholder="*******" className="input" />
          <MsgError>
            <span>{mensagemError}</span>
          </MsgError>
        </CamponentCamp>

        <CamponentCamp>
          <span>Confirmação de senha</span>
          <br />
          <input type="password" placeholder="*******" className="input" />
          <MsgError>
            <span>{mensagemError}</span>
          </MsgError>
        </CamponentCamp>

        <ComponentBotaoEnviar>
          <CamponentBotaoPost onClick={Enviar}>
            <CiSaveUp2 className="fontSize" /> <span>{textoBtnEnviar}</span>
          </CamponentBotaoPost>
        </ComponentBotaoEnviar>
      </ComponentFormCadastro>
    );
  };

  const FormularioLogin = () => {
    return (
        <>
      <ComponentFormLogin>
        <CamponentCamp>
          <span>Usuário</span>
          <br />
          <InputMask
            mask="999.999.999-99"
            type="text"
            placeholder="000.000.000-00"
            className="input"
            value={cpf}
            onChange={handleChangeUserCPF}
            id="InputCPF"
          />
        </CamponentCamp>
        <br />
        <CamponentCamp>
          <span>Senha</span>
          <br />
          <input
            type="password"
            placeholder="*******"
            className="input"
            value={senha}
            onChange={handleChangeUserSenha}
          />
          <MsgError>
            <span>{mensagemError}</span>
          </MsgError>
        </CamponentCamp>

        <CamponentCamp>
          <label>Esqueceu sua senha?</label>
          <br />
          <span>clique aqui</span>
        </CamponentCamp>

        <ComponentBotaoEnviar>
          <CamponentBotaoPostLogin onClick={Logar}>
            <CiLogin className="fontSize" /> <span>{loading}</span>
          </CamponentBotaoPostLogin>
        </ComponentBotaoEnviar>
      </ComponentFormLogin>
</>
    );
  };

  const Enviar = () => {
    setTextoBtnEnviar("Enviando...");
    setTimeout(() => {
      window.location = "/Login";
    }, 5000);
  };

  return (
    <ComponentModals>
      <ComponentPequeno>
        <ComponentYeloow>
          <ComponentText>
            <ComponentBemVindo>
              <span className="Ola">Olá,</span>
              <br />
              <strong className="primeiro-text">Bem vindo!</strong>
            </ComponentBemVindo>
          </ComponentText>
        </ComponentYeloow>
        <ComponentText>
          <span className="segundo-text">
            {modalAberto ? "Faça agora seu login" : "Ainda não é cliente?"}
          </span>
        </ComponentText>
        <ComponentBtn>
          <Botao onClick={abrirCadastro}>{textoBotao}</Botao>
        </ComponentBtn>
      </ComponentPequeno>
      <ComponentBollDark />

      <ComponentModalVidro>
        {login && <FormularioLogin />}
        {modalAberto && <FormularioCadastro />}
      </ComponentModalVidro>

      <ComponentBolYellow />
    </ComponentModals>
  );
}
