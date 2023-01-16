import React from "react";
import styled from "styled-components";

export default function GiveUsAnIdea() {
  return (
    <Container>
      <h1>Provide Us a Feedback or Idea</h1>
      <p>
        We value ideas and feedbacks from the community to grow up our services.
        You can suggest any bug, design, features or even a new app idea. Every
        suggestion matters to us, be sure to provide if you have any.
      </p>
      <div className="suggestion-table">
        <div className="suggestion-table_col">Name</div>
        <div className="suggestion-table_col">Submission URL</div>
        <div className="suggestion-table_col">Website Idea Submission</div>
        <div className="suggestion-table_col">
          <a
            href="https://github.com/OpenIslamicApp/OpenIslamicApp.github.io/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Here
          </a>
        </div>
        <div className="suggestion-table_col">Prayer Time Idea Submission</div>
        <div className="suggestion-table_col">
          <a
            href="https://github.com/OpenIslamicApp/prayer-time/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Here
          </a>
        </div>
        <div className="suggestion-table_col">New Idea Submission</div>
        <div className="suggestion-table_col">
          <a
            href="https://github.com/OpenIslamicApp/IDEAS/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Here
          </a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: calc(24px + 2vmin);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  & > h1 {
    font-size: calc(18px + 2vmin);
  }
  & > p {
    font-size: calc(8px + 2vmin);
    max-width: 700px;
  }
  .suggestion-table {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: min(500px, 100%);
    margin: auto;
    &_col {
      padding: 16px;
      border: 1px solid var(--cream);
      font-size: calc(8px + 2vmin);
      max-width: 700px;
      & > a {
        text-decoration: none;
        color: var(--deep);
      }
      &:nth-child(1),
      &:nth-child(2) {
        font-weight: 800;
      }
    }
  }
`;
