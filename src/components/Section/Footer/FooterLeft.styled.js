import styled from 'styled-components';

export const Layout = styled.div`
  width: 50%;
  & .logo {
    width: 140px;
    margin-bottom: 20px;
  }

  & p {
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const ImageBox = styled.div`
  display: flex;

  & div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: #111111;
    border-radius: 50%;
    margin-right: 15px;
    & .instar {
      width: 18px;
      height: 18px;
    }

    & .youtube {
      width: 21px;
      height: 14px;
    }

    & .branch {
      width: 20px;
      height: 20px;
    }
  }
`;
