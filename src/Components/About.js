import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <h2>About</h2>
      <p>
        OpenIslamicApp is an open source entity to create community first
        Islamic Apps, founded by{" "}
        <a href="http://ahjim.com" target="_blank" rel="noopener noreferrer">
          Akhlak Hossain Jim
        </a>{" "}
        on 4<sup>th</sup> of April, 2022, to create a Ramadan calender for 2022
        according to the calender of his nearest Masjid. But soon enough, have
        started to expand as whole year calender. Then the goal has changed to
        make more Apps which can be used globally rather than local area uses by
        anyone.
      </p>
      <p>
        Since then, people have started to contribute to the project. And we
        would love to invite all developers to contribute even by giving just a
        small advice. Cause in Islam, your small helpful idea is also considered
        as <q>Sadaqa Jariya</q>.
      </p>
    </Container>
  );
}

const Container = styled.section`
  padding: 48px 24px;
  & > h2 {
    font-size: calc(20px + 2vmin);
    font-weight: 700;
    position: relative;
    display: inline;
    &::after {
      content: "";
      position: absolute;
      bottom: -10%;
      left: -10%;
      height: 10%;
      width: 50%;
      border-radius: 12px;
      background-color: var(--black);
    }
  }
  & > p {
    margin-top: 24px;
    font-size: calc(14px + 2vmin);
    & > a {
      color: var(--deep);
      text-decoration: none;
    }
  }
`;
