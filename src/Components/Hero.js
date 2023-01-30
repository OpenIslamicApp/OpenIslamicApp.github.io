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
        <p>
          Allah never said the road would be easy. But Allah said,
          <br />
          <q>I will be with those who are patient.</q>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/bg.webp");
  background-position: center;
  background-size: cover;
  aspect-ratio: 16/8;
  @media (max-width: 390px) {
    aspect-ratio: 4/5;
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    text-align: center;
    margin: auto;
    height: 100%;
    backdrop-filter: blur(3px);
    & > h1 {
      font-size: calc(20px + 4vmin);
      font-weight: 900;
    }
    & > p {
      font-size: calc(12px + 2vmin);
      font-weight: 600;
      & > q {
        font-style: oblique;
      }
    }
  }
`;
