import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
z-index:2;
`;

export const DisplayFlex = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 10px 50px;
  position: relative;
  top: 8px;

  background: #fff; /*rgba( 255, 255, 255, 0.35 );*/
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Serach = styled.input`
width:100%;
padding:10px;
outline: none;
border: none;
background: transparent;

`;
export const Lupa = styled.div`
width:2%;
border-left: 1px solid #e5e0e0;
    padding: 10px;

.icon-font{
  font-size:16px;
}

`;
