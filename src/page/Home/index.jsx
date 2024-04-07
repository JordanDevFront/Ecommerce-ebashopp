import React, {useEffect} from "react";
import { Container} from "./style";
import { Bnner } from "../../componentes/BannerMain";
import { Search } from "../../componentes/Pesquisar";
import { Produto } from "../../componentes/Produto";

import ListaImage from "../../data/images";


function Home() {
  useEffect(()=>{
  
  },[])

  return (
    <>
      <Container>
        <Bnner>
          {ListaImage.map((img) => {
            return <img key={img.id} src={img.imgURL} alt={img.imgAlt} />;
          })}
        </Bnner>
        <Search />

        <Produto />
      </Container>
    </>
  );
}

export default Home;
