import styled from 'styled-components';

export const Layout = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #111111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  & img {
    cursor: pointer;
    width: 185px;
    height: 18px;
  }
`;

export const ListBox = styled.ul`
  display: flex;
  color: #fff;

  & li {
    cursor: pointer;
    font-weight: 600;
    margin-left: 50px;
  }
`;
