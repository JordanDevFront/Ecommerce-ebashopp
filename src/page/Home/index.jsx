import React, {useEffect, useState} from "react";
import { Container, Card, ContainerImage, ConatinerInfo, Img, Col, Titulo, Preco, PrecoDesc, PrecoParcela, Frete, AddCarrinho, ListProduct } from "./style";
import imageProd from "../../imagens/imageProd.jpg"
import { CiDeliveryTruck, CiShoppingCart  } from "react-icons/ci";
import axios from "axios";
import { Bnner } from "../../componentes/BannerMain";
import { Search } from "../../componentes/Pesquisar";
import { Produto } from "../../componentes/Produto";


function Home() {
  useEffect(()=>{
    ListProd();
  },[])
  const [Data, setData] = useState([]);
  const [nome_prod, setNome_prod] = useState("");
  const [preco, setPreco] = useState("");
  const [preco_desconto, setPreco_desconto] = useState("");
  const [qnt_parcelas, setQnt_parcelas] = useState("");
  const [valor_parcela, setValor_parcela] = useState("");
  const [frete, setFrete] = useState("");

  async function ListProd (){
    try {
      const response = await axios.get("http://localhost:8080/products/");
      console.log(response.data);
      console.log(Data);
      setData(response.data);
      setNome_prod(response.data.nome_prod);
      setPreco(response.data.preco);
      setPreco_desconto(response.data.preco_desconto);
      setQnt_parcelas(response.data.qnt_parcelas);
      setValor_parcela(response.data.valor_parcela);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <Bnner />
        <Search />

        <Produto />
      </Container>
    </>
  );
}

export default Home;
