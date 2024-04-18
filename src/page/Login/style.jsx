import styled, { keyframes, css } from "styled-components";

const floatAnimation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-30px);
	}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vw;
`;
export const ComponentDark = styled.div`
  width: 40%;
  background: #001f3f;
  height: 100%;
`;
export const ComponentWhite = styled.div`
  background: #fff;
  width: 60%;
  height: 100%;
`;
export const ComponentLogotipoLogin = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;

  animation: ${floatAnimation} 4s ease-in-out infinite;
`;
export const ComponentImage = styled.img`
  width: 100%;
`;

