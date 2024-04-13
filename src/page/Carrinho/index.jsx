import React, { useState, useEffect } from "react";
import {
  Container,
  Flex,
  ListItem,
  InfoPage,
  Item,
  Image,
  Img,
  ComponenteDescricao,
  ComponenteTitulo,
  TextoForte,
  Valor,
  ComponenteControlador,
  ComponenteBotao,
  Quantidade,
  BotaoMenor,
  BotaoMais,
  ComponenteQuantidade,
  ComponenteModal,
  ComponenteExcluir,
  BotaoExcluir,
  ComponenteDetalhes,
  ComponenteDetalheDaCompra,
  Produtos,
  ComponenteBotaoFinalizar,
  BotaoFinalizar,
  ComponenteCol,
  Col,
  ColFrete,
  ColItem,
} from "./style";

import Imagem from "../../imagens/image.jpg";

function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [valorTotal, setValorTotal] = useState(0);
  const [valueBotaoFinalizar, setValueBotaoFinalizar] = useState("Finalizar")

  const [ArrayProd, setArrayProd] = useState([
    {
      id: 1,
      titulo: "Panela Vermelha de Aluminio",
      preco: 40.0,
      precoAlt: 40.0,
    },
    {
      id: 2,
      titulo: "Colher Vermelha de Aluminio",
      preco: 4.0,
      precoAlt: 4.0,
    },
  ]);

  useEffect(() => {
    const total = ArrayProd.reduce(
      (acc, item) => acc + item.precoAlt * quantidade,
      0
    );
    setValorTotal(total);
  }, [ArrayProd, quantidade]);

  const aumentarQuantidade = (id) => {
    setArrayProd((prevArrayProd) => {
      return prevArrayProd.map((item) => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade ? item.quantidade + 1 : 1;
          const novoPreco = novaQuantidade * item.preco;
          return { ...item, quantidade: novaQuantidade, precoAlt: novoPreco };
        }
        return item;
      });
    });
  };

  const diminuirQuantidade = async (id) => {
    setArrayProd((prevArrayProd) => {
      return prevArrayProd.map((item) => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade ? item.quantidade - 1 : 1;
          const novoPreco = novaQuantidade * item.preco;
          return { ...item, quantidade: novaQuantidade, precoAlt: novoPreco };
        }
        return item;
      });
    });
  };

  const FinalizarCompra = async () => {
    setValueBotaoFinalizar("Finaliando...")

  }

  return (
    <>
      <Container>
        <Flex>
          <ListItem>
            {ArrayProd.map((item, index) => {
              return (
                <Item key={index}>
                  <Image>
                    <Img src={Imagem}></Img>
                  </Image>

                  <ComponenteDescricao>
                    <ComponenteTitulo>
                      <TextoForte>{item.titulo}</TextoForte>
                      <Valor>{"R$" + item.precoAlt}</Valor>
                    </ComponenteTitulo>
                  </ComponenteDescricao>

                  <ComponenteControlador>
                    <ComponenteModal>
                      <ComponenteBotao>
                        <BotaoMenor onClick={() => diminuirQuantidade(item.id)}>
                          -
                        </BotaoMenor>
                      </ComponenteBotao>
                      <ComponenteQuantidade>
                        <Quantidade>{item.quantidade || 1}</Quantidade>
                      </ComponenteQuantidade>
                      <ComponenteBotao>
                        <BotaoMais onClick={() => aumentarQuantidade(item.id)}>
                          +
                        </BotaoMais>
                      </ComponenteBotao>
                    </ComponenteModal>
                  </ComponenteControlador>

                  <ComponenteExcluir>
                    <BotaoExcluir>x</BotaoExcluir>
                  </ComponenteExcluir>
                </Item>
              );
            })}
          </ListItem>

          <InfoPage>
            <ComponenteDetalhes>
              <ComponenteDetalheDaCompra>
                Detalhes da compra
              </ComponenteDetalheDaCompra>

              <Produtos>
                <ComponenteCol>
                  <ColFrete>
                    <span>Frete:</span>{" "}
                  </ColFrete>
                  <ColItem>
                    <span>R$14,90</span>
                  </ColItem>
                </ComponenteCol>
                <ComponenteCol>
                  <Col>
                    <span>Total:</span>{" "}
                  </Col>
                  <ColItem>
                    <span>{"R$" + valorTotal.toFixed(2)}</span>
                  </ColItem>
                </ComponenteCol>
              </Produtos>
            </ComponenteDetalhes>

            <ComponenteBotaoFinalizar>
              <BotaoFinalizar onClick={FinalizarCompra}>{valueBotaoFinalizar}</BotaoFinalizar>
            </ComponenteBotaoFinalizar>
          </InfoPage>
        </Flex>
      </Container>
    </>
  );
}

export default Carrinho;
