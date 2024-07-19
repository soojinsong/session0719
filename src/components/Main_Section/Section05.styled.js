import styled from 'styled-components';

export const Section05Wrap = styled.section`
  padding: 20px 20px;
  width: 100%;
  border-bottom: 2px solid #e3e3e3;
`;

export const Section05Header = styled.div`
  text-align: center;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 20px;
    color: #ff7710;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
  }

`;
export const Section05Grid = styled.div`
  display: grid;
  max-width: 1250px;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 30px;
  margin: 0 auto; 
  justify-items: center;
  place-content: center;
`;
export const Section05MainContentBlock = styled.div`
  cursor: pointer;
  background-color: #f5f5f5;
  max-width: 290px;
  width: 100%;
  margin: 0;
    > div {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px 25px;

      h3 {
        font-size: 18px;
        font-weight: 600;
      }

      .text {
        padding-bottom: 20px;
        border-bottom: 2px solid #e3e3e3;
        color: #737373;
      }

      .info {
        color: #a6a6a6;
      }
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 60px 280px;

  .left {
    width: 50%;

    > img {
      width: 140px;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.5;
      margin-bottom: 20px;
    }

    > div {
      display: flex;

      > div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        background-color: #111111;
        border-radius: 50%;
        margin-right: 15px;

        .instar {
          width: 18px;
          height: 18px;
        }

        .youtube {
          width: 21px;
          height: 14px;
        }

        .branch {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: space-between;

    > div {
      h3 {
        font-weight: 600;
        margin-bottom: 30px;
      }

      > p {
        margin-bottom: 15px;
      }

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        p {
          margin-right: 10px;
        }

        img {
          cursor: pointer;
          width: 13px;
          height: 13px;
        }
      }
    }
  }
`;