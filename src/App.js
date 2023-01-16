import React from "react";
import styled from "styled-components";
import Hero from "./Components/Hero";
import Under from "./Components/Under";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Under />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: 0 auto;
`;
