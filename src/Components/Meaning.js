import React from "react";
import styled from "styled-components";

export default function Meaning() {
  return (
    <Container>
      <div className="meanings">
        <h2>Open</h2>
        <p>Open for everyone to use and to build on for free of charges.</p>
      </div>
      <div className="meanings">
        <h2>Islamic</h2>
        <p>Creating to facilitate regular practicing Muslim community.</p>
      </div>
      <div className="meanings">
        <h2>App</h2>
        <p>Cross platform app, can be accessed and installed for any device.</p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 548px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .meanings {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--white);
    color: var(--deep);
    &:nth-child(2) {
      background-color: var(--cream);
      color: var(--white);
    }
    &:nth-child(3) {
      background-color: var(--deep);
      color: var(--cream);
      @media (max-width: 548px) {
        grid-column: 1 / span 2;
        & > p {
          width: min(250px, 100%);
        }
      }
    }
    & > h2 {
      font-size: calc(14px + 2vmin);
    }
    & > p {
      font-size: calc(10px + 2vmin);
    }
  }
`;
