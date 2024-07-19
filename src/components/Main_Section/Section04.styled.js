import styled from 'styled-components';


export const Section04Wrap = styled.section`
  height: 600px;
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > h3 {
    text-align: center;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 20px;

    em {
      color: #fff;
    }
  }

  > div { 
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const CircleContainer = styled.div`
  margin: 0 20px;
  max-width: 330px;
  max-height: 330px;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  aspect-ratio: 1 / 1;

  h3 {
    font-weight: 600;
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 20px;
  }

  p {
    font-size: clamp(0.5rem, 2vw, 1.25rem);
    margin-bottom: 5px;
  }

  .orange {
    color: #ff7710;
  }
`;
