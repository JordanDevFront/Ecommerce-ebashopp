import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2"
import { Container, Col, Input } from "./style";

export function Cadastro() {
    const [Dados, setDados] = useState([]);
    const [cpf, setCpf] = useState("");
    const [nome_completo, setNomeCompleto] = useState("");
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [data_nasc, setData_nasc] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("")
  
    useEffect(()=>{
      
    },[])
  
    async function Adicionar() {
  
      const dados = {
        cpf: cpf,
        nome_completo: nome_completo,
        data_nasc: data_nasc,
        celular: celular,
        email:email,
        username: username,
        senha: senha,
        cep: cep,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade, 
        uf: uf,
  
      }
  
      if(cpf === "" || cpf === null){
        Swal.fire({
          title: "Atenção!",
          text: "Campo CPF é obrigatório!",
          icon: "warning"
        });
        return
      }
      if(nome_completo === "" || nome_completo === null){
        Swal.fire({
          title: "Atenção!",
          text: "Digite seu nome completo!",
          icon: "warning"
        });
        return
      }
      if(data_nasc === "" || data_nasc === null){
        Swal.fire({
          title: "Atenção!",
          text: "Digite sua data de nascimento!",
          icon: "warning"
        });
        return
      }
      if(celular === "" || celular === null){
        Swal.fire({
          title: "Atenção!",
          text: "Informe um número de celular!",
          icon: "warning"
        });
        return
      }
      if(email === "" || email === null){
        Swal.fire({
          title: "Atenção!",
          text: "Informe o seu E-mail!",
          icon: "warning"
        });
        return
      }
      if(username === "" || username === null){
        Swal.fire({
          title: "Atenção!",
          text: "Digite um nome de usuário!",
          icon: "warning"
        });
        return
      }
      if(senha === "" || senha === null){
        Swal.fire({
          title: "Atenção!",
          text: "Digite uma senha!",
          icon: "warning"
        });
        return
      }
      if(cep === "" || cep === null){
        Swal.fire({
          title: "Atenção!",
          text: "Campo CEP é obrigatório!",
          icon: "warning"
        });
        return
      }
      if(numero === "" || numero === null){
        Swal.fire({
          title: "Atenção!",
          text: "Campo Número é obrigatório!",
          icon: "warning"
        });
        return
      }
  
      axios.post(`http://localhost:8080/auth/register/`, dados).then(function (response) {
        Swal.fire({
          title: "Parabéns!",
          text: response.data.message,
          icon: "success"
        });
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
        Swal.fire({
          title: "Atenção!",
          text: error,
          icon: "warning"
        });
      });
  
    }
  
    async function Login(){
  
    }


  return (
      <Container>
        <form>
          <Col>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              value={nome_completo}
              onChange={(e) => {
                setNomeCompleto(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite sua data de nascimento"
              value={data_nasc}
              onChange={(e) => {
                setData_nasc(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite o número do seu celular"
              value={celular}
              onChange={(e) => {
                setCelular(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Crie um nome usuário para você"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="password"
              placeholder="Digite uma senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Digite o seu cep"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => {
                setEndereco(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Número"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => {
                setBairro(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value);
              }}
            />
          </Col>

          <Col>
            <Input
              type="text"
              placeholder="Estado - UF"
              value={uf}
              onChange={(e) => {
                setUf(e.target.value);
              }}
            />
          </Col>

          <input
            type="button"
            name="enviar"
            id="enviar"
            onClick={() => {
              Adicionar();
            }}
            value=" Enviar "
          />
        </form>

        <br/>
        <br/>

        <form>
          <Col><Input type="text" placeholder="Login"/></Col>
          <br/>
          <Col><Input type="password" placeholder="Senha"/></Col>
          <br/>
          <Col><input
            type="button"
            name="entrar"
            id="Entrar"
            onClick={() => {
              Login();
            }}
            value=" Entrar "
          /> </Col>
        </form>
      </Container>

  );
}