import React from "react";
import styled from "styled-components";

export default function DUA() {
  return (
    <Container>
      <div className="img">
        <div className="img-con">
          <img src="/apps/Dua.png" alt="Prayer Time App mobile view" />
        </div>
      </div>
      <div className="text">
        <h1>Dua App</h1>
        <p>
          Dua App was created inside the Prayer Time App. But we decided to
          segregate to add a lot more Duas and functionalities separately in the
          app. The Prayer Time will remain to include Duas related to prayer.
          And this App will contain all of them with more Duas with explanation
          and Shariyah reference.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: var(--cream);
  @media (max-width: 548px) {
    grid-template-columns: 1fr;
  }
  & > .text {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & > h1 {
      font-size: calc(16px + 2vmin);
      font-weight: 800;
    }
    & > p {
      font-size: calc(10px + 2vmin);
      max-width: 500px;
      line-height: 120%;
    }
  }
  & > .img {
    width: 100%;
    height: 100%;
    background-image: url("/apps/Dua.png");
    background-position: center;
    background-size: 110%;
    background-repeat: no-repeat;
    & > .img-con {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      backdrop-filter: blur(10px);
      & > img {
        width: min(170px, 100%);
      }
    }
  }
`;
