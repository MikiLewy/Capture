import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
  .logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    letter-spacing: 2px;
    @media (max-width: 1300px) {
      display: inline-block;
      margin: 2rem;
    }
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    flex-basis: 40%;
    li {
      position: relative;
      &::after {
        content: "";
      }
    }
    @media (max-width: 1300px) {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  a {
    color: #bbb;
    text-decoration: none;
  }
  .active {
    color: white;
  }
`;
export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%auto;
`;
