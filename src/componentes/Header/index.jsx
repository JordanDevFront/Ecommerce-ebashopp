import React, { useState } from "react";
import image from "../imagens/image.jpg";
import {
  HeaderCSS,
  Logotipo,
  Info,
  Cart,
  Fav,
  User,
  BtnEnter,
  BtnCriar,
  NomeUser,
  Controller,
  ModalFavorito,
  Card,
  Imagem, 
  Img,
  Inform
} from "./style";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

export function Header() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [nomeUser, setNomeUser] = useState(loggedInUser);

  const [modal, setModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [ArrayProdFav, setArrayProdFav] = useState([
    {
      id:1,
      title: "Panela de pressão Vermelha com Pino",
      preco: 0.00,
      parcelamento: 12,
      preco_parcela: 0.00
    },
    {
      id:1,
      title: "Caneca de Café Vermelha com Pino",
      preco: 0.00,
      parcelamento: 12,
      preco_parcela: 0.00
    }
  ])

  const Logout = async () => {
    localStorage.removeItem("loggedInUser");
    window.location = "/Login";
  };

  const abrirOuFecharModal = async () => {
    setModal(!modal);
  };

  return (
    <>
      <HeaderCSS>
        <Logotipo>
          <span>LOGOTIPO</span>
        </Logotipo>
        {window.location.pathname === "/Login" ? null : (
          <Info>
            <>
              {nomeUser === "" || nomeUser == null ? (
                <></>
              ) : (
                <Fav>
                  <CiHeart
                    className="font-size"
                    onClick={() => setModalVisible(!modalVisible)}
                  />
                  <span>5</span>
                </Fav>
              )}
              <Cart href="/Carrinho">
                <CiShoppingCart className="font-size" />
                <span>8</span>
              </Cart>
              {nomeUser === "" || nomeUser === null ? (
                <>
                  <BtnCriar>
                    <a href="#">Criar conta</a>
                  </BtnCriar>
                  <BtnEnter>
                    <a href="/Login">Entrar</a>
                  </BtnEnter>
                </>
              ) : (
                <>
                  <User>
                    <a onClick={abrirOuFecharModal}>
                      <CiUser className="font-size-user" />
                    </a>
                  </User>
                  <NomeUser>
                    <label>
                      {" "}
                      Olá,{" "}
                      <strong>
                        <a href="/MeusDados">{nomeUser}</a>
                      </strong>
                      !
                    </label>
                  </NomeUser>
                </>
              )}
            </>
          </Info>
        )}
      </HeaderCSS>

      {modal && (
        <Controller>
          <div className="info">
            <a href="#">Troca senha</a>
            <br />
            <a href="#" onClick={Logout}>
              Sair
            </a>
          </div>
        </Controller>
      )}

      <ModalFavorito isVisible={modalVisible}>
        {ArrayProdFav.map((ent, index) => {
          return (
            <>
              <Card key={index.id}>
                <Imagem>
                  <Img src={image} />
                </Imagem>
                <Inform>
                  <label>{ent.title}</label>
                  <br />
                  <br />
                  <strong>{"R$" + parseFloat(ent.preco).toFixed(2)}</strong>
                  <br />
                  <span>
                    {ent.parcelamento + "x"}{" "}
                    {"R$" + parseFloat(ent.preco_parcela).toFixed(2)} sem juros
                  </span>
                </Inform>
              </Card>
            </>
          );
        })}
      </ModalFavorito>
    </>
  );
}
