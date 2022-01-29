import styled, { css } from "styled-components";

export const Container = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

  `}
`;

export const Form = styled.form`
${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    width: 600px;
    height: 400px;
    background: #98dc8f;
    border-radius: 8px;
  `}
`;
