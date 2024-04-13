import React, {useState, useEffect} from "react";
import {
  Flex,
  Card,
  Controle,
  Favorito,
  Slide,
  Imagem,
  Info,
  ComponenteDescricaoProd,
  ComponentePreco,
  ComponentePrecoAntigo,
  ComponentePrecoProd,
  ComponenteParcelamento,
  ComponenteDadosParcelamento
} from "./style";

import { Botao, BtnAdicionarCarrinho, Espaco } from "../styledGlobal";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import ImagemError from "../../imagens/image.jpg"
import axios from "axios";

export function Produto() {
  const [data, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textBtn, settextBtn] = useState("Adicionar no carrinho");
  const [semJuros, setSemJuros] = useState("sem juros");
  const [URLIMAGE, setUrlImg] = useState("https://lh3.googleusercontent.com/pw/");

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 5000);
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/produtos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.status === 200) {
        setDados(data);
        const produtos = data.filter(produtos = produtos.id_categoria === 1)
        console.log(produtos)
      }
    } catch (error) {
      console.error("Erro:", error.message);
    }
  };
  const handleFavoritar = (id_prod, fav_auth) => {
    // Define o novo valor de fav_auth com base no valor atual
    const newFavAuth = fav_auth === 1 ? 2 : 1;
    axios
      .put(`http://localhost:8080/produtos/${id_prod}`, { fav_auth: newFavAuth })
      .then((response) => {
        // Verifica se a resposta indica que a atualização foi bem-sucedida
        if (response.status === 204) {
          // Atualiza o estado do item na UI, se necessário
          // Por exemplo, você pode usar setState para atualizar a lista de produtos
          fetchData();
        } else {
          console.error("Falha ao atualizar o valor de fav_auth:", response.statusText);
          alert("Falha ao atualizar o valor de fav_auth.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição PUT:", error);
        alert("Erro ao enviar requisição PUT.");
      });
  };
  const AddNoCarrinho = () => {
    settextBtn("Adicionado")

  }

  return (
    <>
      <Flex>
        {data.map((item) => {
          let ImagemProd = item.img; //URLIMAGE + 
          return (
            <Card key={item.id_prod}>
              <Controle>
                <Favorito
                  onClick={() => handleFavoritar(item.id_prod, item.fav_auth)}
                >
                  {item.fav_auth === 1 ? (
                    <FaRegHeart className="icon-font-color" />
                  ) : (
                    <FaHeart className="icon-font-color" />
                  )}
                </Favorito>
              </Controle>

              <Slide>
                {item.img === "" || item.img === null ? (
                  <Imagem src={ImagemError} alt="img_produto_ERROR" />
                ) : (
                  <Imagem src={item.img} alt="img_produto" />
                )}
              </Slide>
              

              <Info>
                <ComponenteDescricaoProd>
                  {item.nome_prod}
                </ComponenteDescricaoProd>

                <Espaco />

                <ComponentePreco>
                  <ComponentePrecoAntigo>R$255,90</ComponentePrecoAntigo>
                  <Espaco />
                  <ComponentePrecoProd>R${item.preco}</ComponentePrecoProd>
                </ComponentePreco>

                <ComponenteParcelamento>
                  <ComponenteDadosParcelamento>
                    {item.qnt_parcelas}x R${item.valor_parcela} {semJuros}
                  </ComponenteDadosParcelamento>
                </ComponenteParcelamento>
              </Info>

              <Botao>
                <BtnAdicionarCarrinho role="button" onClick={AddNoCarrinho}>
                  {textBtn}
                </BtnAdicionarCarrinho>
              </Botao>
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
