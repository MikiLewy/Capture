import styled from "styled-components";
import {
  Wrapper,
  ImageContainer,
} from "components/HeroSection/HeroSection.styles";

export const ServicesWrapper = styled(Wrapper)`
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }

  .card {
    flex-basis: 48%;
    .icon {
      display: flex;
      align-items: center;
      gap: 10px;
      h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
      }
    }
  }
`;
export const ImgContainer = styled(ImageContainer)`
  @media (max-width: 1300px) {
    width: 100%;
    flex-basis: 100%;
  }
`;
