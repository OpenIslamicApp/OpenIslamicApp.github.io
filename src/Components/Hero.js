import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <Container>
      <div className="hero">
        <h1>
          Welcome to
          <br />
          OpenIslamicApp
        </h1>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/bg.webp");
  background-position: center;
  background-size: cover;
  aspect-ratio: 16/8;
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    height: 100%;
    font-size: calc(20px + 4vmin);
    font-weight: 900;
    backdrop-filter: blur(3px);
  }
`;
