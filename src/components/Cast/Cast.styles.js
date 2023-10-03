import { styled } from 'styled-components';

export const CastList = styled.ul`
   list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
margin: 12px;
padding: 0;

li{
    display: flex;
    gap: 12px;
    width: 220px;
}
h3{
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.32px;
    margin: 0;
    margin-bottom: 4px;
}
p{
    font-size: 12px;
}
`;