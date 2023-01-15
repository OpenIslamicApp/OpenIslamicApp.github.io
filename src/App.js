import React from "react";
import styled from "styled-components";
import Under from "./Components/Under";
import Header from "./Layout/Header";

export default function App() {
  return (
    <Container>
      <Header />
      <Under />
    </Container>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: 0 auto;
`;
