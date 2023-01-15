import React from "react";
import styled from "styled-components";

export default function Under() {
  return (
    <Container>
      The site is Under development.
      <br />
      Please get back in few days.
    </Container>
  );
}

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: calc(20px + 2vmin);
`;
