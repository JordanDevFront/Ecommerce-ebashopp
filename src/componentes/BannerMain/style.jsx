import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  height: 100%;

  .grandient{
    background: linear-gradient(180deg,transparent,#fff);
    position: absolute;
    width: 100%;
    height: 99px;
    z-index: 0;
    top: 281px;
  }
`;

export const SlideMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  position: relative;
    top: -20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SlideMedio = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 5px;
padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Banner800 = styled.div`
  width: 100%;
  height: auto;
  background: #fff;

  img{
    width:100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Banner1000 = styled.div`
width: 96.3%;
height: 100px;
border-radius: 4px;
background: #f1f1f1;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 5px;

img{
  width:100%;
    height: auto;
    border-radius: 4px;
}

@media (max-width: 768px) {
  width: 100%;
}
`;
