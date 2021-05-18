import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  button {
    cursor: pointer;
    background: var(--red);
    border: 0;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    color: var(--shape);
    transition: .2s;

    &:hover {
        background: ${darken(0.1, '#E52E4D')}
    }
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    thead {
      @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        tr {
          th {
            padding: 1rem;
          }
        }
      }
      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }
    }

    tbody {
      @media only screen and (max-width: 768px) {
        tr {
          display: flex;
          flex-direction: column;
          margin: 0 0 10px;
          
          button {
            width: 100%;
          }
        }
      }
      td.btn-col {
        text-align: right;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      font-weight: 500;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
