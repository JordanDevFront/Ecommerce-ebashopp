import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background: #fff;
height: 100%;
z-index:2;
`;

export const DisplayFlex = styled.div`
display:flex;
width:50%;
margin:0 auto;
padding:10px 50px;


background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Serach = styled.input`
width:100%;
padding:10px;
outline: none;
border: none;

`;
export const Lupa = styled.div`
width:2%;
border-left: 1px solid #e5e0e0;
    padding: 10px;

.icon-font{
  font-size:16px;
}

`;
