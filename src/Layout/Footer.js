import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p className="cpy">
        &copy; 2022
        {new Date().getFullYear() !== 2022
          ? `-${new Date().getFullYear()}`
          : ""}{" "}
        OpenIslamicApp - All right reserved.
      </p>
      <p className="by">
        Created & ❤️ By <a href="https://ahjim.com">Akhlak Hossain Jim</a>
      </p>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px 48px;
  & > p.cpy {
    text-transform: uppercase;
    font-weight: 700;
  }
  & > p.by {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
  }
`;
