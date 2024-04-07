import React, { useState } from "react";
import image from "../../imagens/image.jpg";
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
  Inform,
  DesktopComponent,
} from "../style";

import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

import Produtos from "../../../data/produtos"

export function HeaderDesktop() {
  const loggedInUser = localStorage.getItem("usuario");
  const [nomeUser, setNomeUser] = useState(loggedInUser);

  const [modal, setModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [ArrayProdFav, setArrayProdFav] = useState(Produtos);

  const Logout = async () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("usuario");
    localStorage.removeItem("documento");
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    window.location = "/Login";
  };

  const abrirOuFecharModal = async () => {
    setModal(!modal);
  };

  return (
    <>
      <DesktopComponent>
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
                    <span>2</span>
                  </Fav>
                )}
                <Cart href="/Carrinho">
                  <CiShoppingCart className="font-size" />
                  <span>2</span>
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
      </DesktopComponent>

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
            <Card key={index}>
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
          );
        })}
      </ModalFavorito>
    </>
  );
}
