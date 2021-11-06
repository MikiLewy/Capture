import styled from "styled-components";
import { Wrapper } from "components/HeroSection/HeroSection.styles";

export const ServicesWrapper = styled(Wrapper)`
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
