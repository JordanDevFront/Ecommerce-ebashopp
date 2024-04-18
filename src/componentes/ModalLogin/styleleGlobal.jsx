import styled, { keyframes, css } from "styled-components";

const floatAnimation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-30px);
	}
`;
export const ComponentModals = styled.div`
  display: flex;
`;
export const ComponentPequeno = styled.div`
  width: 245px;
  height: 260px;
  border-radius: 20px;
  margin: 250px 0px;
  position: relative;
  right: 120px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
export const ComponentText = styled.div`
  padding: 20px;

  .Ola {
    font-size: 22px;
    color: #001f3f;
    font-family: inherit;
    font-weight: 300;
  }

  .primeiro-text {
    font-size: 22px;
    color: #001f3f;
    font-family: inherit;
    font-weight: 600;
  }

  .segundo-text {
    font-size: 22px;
    color: #001f3f;
    font-family: inherit;
    font-weight: 700;
    position: relative;
    top: 10px;
  }
`;
export const ComponentBemVindo = styled.div`
  padding: 50px 0px 0px;
`;
export const ComponentBtn = styled.div`
  padding: 0 20px;
  position: relative;
  top: 10px;
`;
export const Botao = styled.div`
  color: #001f3f;
  background: #ffe600;
  border-radius: 8px;
  padding: 10px 25px;
  text-align: center;
  font-weight: 600;
  width: 100px;

  font-family: inherit;
  font-weight: 700;
  cursor:pointer;
`;
export const ComponentYeloow = styled.div`
  width: 100%;
  height: 135px;
  border-radius: 20px 20px 0 0;
  background: #ffe600;
`;
export const ComponentBollDark = styled.div`
  width: 60px;
  height: 60px;
  background: #001f3f;

  border-radius: 60px;
  margin: 370px 0px;
  position: relative;
  right: 120px;
`;
export const ComponentBolYellow = styled.div`
  width: 180px;
  height: 180px;
  background: #FFE600;

  border-radius: 180px;
  margin: 90px 0px;
  position: relative;
  right: 250px;
`;
export const ComponentModalVidro = styled.div`
  width: 330px;
  height: 336px;

  border-radius: 20px;
  margin: 172px 0px;
  position: relative;
  right: 160px;

  background: #001f3f14;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index:2;
`;
export const ComponentFormLogin = styled.div`
  padding: 20px;
`;
export const ComponentFormCadastro = styled.div`
padding: 0px 20px 0;
`
export const CamponentCamp = styled.div`
  position: relative;
  top: 40px;
  left: 20px;

  label{
    color: #001f3f;
    font-weight: 300;
    font-size:14px;
  }

  span {
    color: #001f3f;
    font-weight: 700;
  }
  .input{
    margin-top:5px;
    border: none;
    padding:10px 0;
    width:230px;
    background: transparent;
    font-size:20px;
    font-weight: 300;
    color: #001F3F;
  }

  input::placeholder {
    color: #001F3F;
  }
  
`;
export const BotaoEntrar = styled.div`
color: #FFE600;
background: #001f3f;
  border-radius: 8px;
  padding: 15px 30px;
  text-align: center;
  font-weight: 600;
  width: 150px;

  font-family: inherit;
  font-weight: 700;
`

export const BotaoEnviar = styled.div`
color: #FFE600;
background: #001f3f;
  border-radius: 8px;
  padding: 15px 30px;
  text-align: center;
  font-weight: 600;
  width: 150px;

  font-family: inherit;
  font-weight: 700;
  position:relative;
  top: 10px;
`
export const ComponentBotaoEntrar = styled.div`
padding:20px;
position:relative;
top: 88px;
cursor:pointer;
`
export const MsgError = styled.div`
  text-align: left;
  position: relative;
  top: -20px;

  span {
    font-size: 12px;
    font-weight: 300;
    color: #e54141;
  }
`;
