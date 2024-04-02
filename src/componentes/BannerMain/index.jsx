import React from "react";
import { Container, SlideMain, Banner800} from "./style";
import banner from "../imagens/banner/1608052946938-mainmlb2x.jpg"

export function Bnner() {

  return (
    <Container>
      <SlideMain>
        <Banner800>
          <img src={banner} />
        </Banner800>
      </SlideMain>
      <div className="grandient"></div>
    </Container>
  );
}