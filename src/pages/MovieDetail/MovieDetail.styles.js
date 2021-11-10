import styled from "styled-components";
import { motion } from "framer-motion";

export const Details = styled(motion.div)`
  color: white;
`;
export const HeadLine = styled.div`
  min-height: 70vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: top;
  }
`;
export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;
export const Award = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
export const ImageWrapper = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
