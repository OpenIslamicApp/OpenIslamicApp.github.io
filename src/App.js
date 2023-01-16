import React from "react";
import styled from "styled-components";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Meaning from "./Components/Meaning";
import PrayerTime from "./Components/PrayerTime";
import Under from "./Components/Under";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Meaning />
      <h1 style={{ padding: "48px 24px", textAlign: "center" }}>
        Apps We Have Created
      </h1>
      <PrayerTime />
      {/* <Under /> */}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: 0 auto;
`;
