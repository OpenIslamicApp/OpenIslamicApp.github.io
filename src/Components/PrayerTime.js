import React from "react";
import styled from "styled-components";

export default function PrayerTime() {
  return (
    <Container>
      <div className="text">
        <h1>Prayer Time App</h1>
        <p>
          Prayer Time App is created to show all the prayer times in Dhaka area
          (now supports all the months).
        </p>
        <p>
          Currently experimenting with by adding some Duas to App itself with
          built in Tasbih Counter. And trying to implement other areas prayer
          time through public API with time highlighting functionality.
        </p>
      </div>
      <div className="img">
        <div className="img-con">
          <img src="/apps/PrayerTime.png" alt="Prayer Time App mobile view" />
        </div>
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
    background-image: url("/apps/PrayerTime.png");
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
