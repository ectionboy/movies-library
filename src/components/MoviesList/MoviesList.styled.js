import { styled } from 'styled-components';


export const ListSection = styled.section`
padding: 0 18px;
`;

export const List = styled.div`
margin:0;
padding:0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  //max-width: 800px;
  width:100%;
  a{
    text-decoration: none;
  }

`;
export const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 180px;
  min-height: 335px;
  background-color: #fff;
border-radius: 4px;
border: 3px solid #fff;
`;
export const ListImg = styled.img`
  width: 179px;
  height:295px;
  border-radius: 4px;
`;
export const ListLink = styled.span`
    font-size: 16px;
font-weight: 500;
line-height: 1.2; 
letter-spacing: 0.4px;
color: #2E2F42;
padding: 8px;
`;