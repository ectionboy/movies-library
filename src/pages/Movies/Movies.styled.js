import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1128px;
  padding: 18px;
`;
export const MoviesForm = styled.form`
display: flex;
align-items: center;
gap: 16px;
`;
export const MoviesInput = styled.input`
 border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0);
font-size: 21px;
font-weight: 400;
line-height: 2; 
letter-spacing: 0.48px;
padding-left: 12px;
 width: 264px;
height: 30px;
`;
export const MoviesButton = styled.button`
padding: 2px 12px;
border: none;
border-radius: 4px;
font-size: 16px;
font-weight: 500;
line-height: 1.5; 
letter-spacing: 0.64px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
background-color: #fff;

&:hover{
    background-color: #e5e5f0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
`;