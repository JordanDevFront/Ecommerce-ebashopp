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
  Inform,
  DesktopComponent,
  MobileComponent,
  MenuCoponent,
  MenuItem,
  HeaderMobileCSS,
  ComponentInfo,
  ComponentMenuBurger,
  ComponentPadding
} from "./style";

import { CiHeart, CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";
import { useMediaQuery } from 'react-responsive';

export function Header() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const loggedInUser = localStorage.getItem("loggedInUser");
  const [nomeUser, setNomeUser] = useState(loggedInUser);

  const [modal, setModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [ComponentMenuBurgerVisible, setComponentMenuBurgerVisible] = useState(false)
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
      {isDesktopOrLaptop && (
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
      )}
      {isTabletOrMobile && (
        <>
          <HeaderMobileCSS>
            <MobileComponent>
              <MenuCoponent>
                <ComponentInfo>
                  <MenuItem>
                    <CiHeart className="font" />
                  </MenuItem>
                  <MenuItem>
                    <CiShoppingCart className="font" />
                  </MenuItem>
                  <MenuItem>
                    <CiMenuBurger
                      className="font"
                      onClick={() =>
                        setComponentMenuBurgerVisible(
                          !ComponentMenuBurgerVisible
                        )
                      }
                    />
                  </MenuItem>
                </ComponentInfo>
              </MenuCoponent>
            </MobileComponent>
          </HeaderMobileCSS>
        </>
      )}

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

      <ComponentMenuBurger isVisible={ComponentMenuBurgerVisible}>
        <ComponentPadding>
        <label>
          {" "}
          Olá, <strong>{nomeUser}</strong>!
        </label>
        <br/>
        <label>Meus dados</label>
        <br/>
        <label>Sair</label>
        </ComponentPadding>
      </ComponentMenuBurger>
    </>
  );
}
