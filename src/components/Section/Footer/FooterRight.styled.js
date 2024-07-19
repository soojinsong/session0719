import styled from 'styled-components';

export const Layout = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;

  & .family {
    h3 {
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 15px;
    }
  }
  & .policy {
    h3 {
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 15px;
    }
  }
  & .resource {
    h3 {
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 15px;
    }
  }
  & .image_p_box {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    p {
      margin-right: 10px;
    }

    img {
      cursor: pointer;
      width: 15px;
      height: 15px;
    }
  }
`;
