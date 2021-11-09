import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 10vh;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  .logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    letter-spacing: 2px;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    flex-basis: 40%;
  }
  a {
    color: #bbb;
    text-decoration: none;
  }
  .active {
    color: white;
  }
`;
