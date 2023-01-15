import React from "react";
import styled from "styled-components";
import Logo from "../Components/Logo";

export default function Header() {
  return (
    <Container>
      <a href="/" className="header-logo">
        <Logo />
      </a>
    </Container>
  );
}

const Container = styled.header`
  background-color: var(--white);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  .header-logo {
    width: min(250px, 100%);
    & > svg {
      width: 100%;
      height: auto;
      & > path {
        fill: var(--black);
      }
    }
  }
`;
