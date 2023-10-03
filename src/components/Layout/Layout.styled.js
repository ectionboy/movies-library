import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1128px;
`;

export const LayoutHeader = styled.header`
display:flex;
align-items: center;
  padding: 15px 50px 15px 50px;
  margin-bottom: 1px;
  height: 32px;
  font-size: 18px;
  background-color: #efeff7;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.06), 0px 2px 1px 0px rgba(46, 47, 66, 0.08);
`;

export const LayoutNav = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.32px;
    color: #515260;

    border-radius: 5px;
    padding: 2px 8px;
    border: 1px solid #a7a7a724;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  }
  .active {
    color: #404BBF;
  }
  a:not(.active):hover {
    color: #2E2F42;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const Main = styled.main`
background-color: #d2d2f5;
min-height: 300px;
padding: 8px 0;
`;