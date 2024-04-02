import React from "react";
import { Container, DisplayFlex, Serach, Lupa } from "./style";
import { CiSearch } from "react-icons/ci";

export function Search() {
  return (
    <>
      <Container>
        <DisplayFlex>
          <Serach type="text" placeholder="Buscar"></Serach>
          <Lupa>
            <CiSearch className="icon-font" />
          </Lupa>
        </DisplayFlex>
      </Container>
    </>
  );
}