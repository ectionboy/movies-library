import { styled } from 'styled-components';

export const Container = styled.div`
display: flex;

flex-direction: column;
gap: 8px;
  margin: 0 auto;
  max-width: 1128px;
  padding: 18px;
  
  font-size: 14px;
font-weight: 400;
line-height: 1.5; 
letter-spacing: 0.32px;
h3{
  font-size: 18px;
font-weight: 400;
line-height: 1.5; 
letter-spacing: 0.32px;
}
li{
    margin: 0;
    padding: 0;
    list-style: none;
}
p{
    margin: 0;
    padding: 0;
}

  .link{
    display: flex;
align-items: center;
justify-content: center;
    width: 73px;
    text-decoration: none;
    padding: 2px 12px;
border: none;
border-radius: 4px;
font-size: 18px;
font-weight: 500;
line-height: 1.5; 
letter-spacing: 0.64px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
background-color: #fff;
color: #000;

  }
`;

export const MovieWrap= styled.div`
display: flex;
gap: 16px;
margin-top: 14px;
`;

export const MovieImg = styled.img`
  width: 179px;
  height:295px;
  border-radius: 4px;
`;

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
flex-direction: column;
gap: 4px;
margin: 0 12px;
    padding: 0;

`;

export const AdditionalList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
margin: 0 12px;
    padding: 0;
`;