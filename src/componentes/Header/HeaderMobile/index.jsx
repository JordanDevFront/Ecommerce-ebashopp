import React, { useState } from "react";
import {
  MobileComponent,
  MenuCoponent,
  MenuItem,
  HeaderMobileCSS,
  ComponentInfo,
  ComponentMenuBurger,
  ComponentPadding,
} from "../style";

import { CiHeart, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

export function HeaderMobile() {
  const loggedInUser = localStorage.getItem("usuario");
  const [nomeUser, setNomeUser] = useState(loggedInUser);
  const [ComponentMenuBurgerVisible, setComponentMenuBurgerVisible] =
    useState(false);

  const Logout = async () => {
    localStorage.removeItem("loggedInUser");
    window.location = "/Login";
  };

  return (
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
                    setComponentMenuBurgerVisible(!ComponentMenuBurgerVisible)
                  }
                />
              </MenuItem>
            </ComponentInfo>
          </MenuCoponent>
        </MobileComponent>
      </HeaderMobileCSS>

      <ComponentMenuBurger isVisible={ComponentMenuBurgerVisible}>
        <ComponentPadding>
          <label>
            {" "}
            Olá, <strong>{nomeUser}</strong>!
          </label>
          <br />
          <label>Meus dados</label>
          <br />
          <label>Sair</label>
        </ComponentPadding>
      </ComponentMenuBurger>
    </>
  );
}
