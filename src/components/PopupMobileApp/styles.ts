import styled from "styled-components"

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.a`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 140px;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
