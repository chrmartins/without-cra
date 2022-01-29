import styled, { css } from "styled-components";

export const Container = styled.div`
${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  `}
`;

export const Input = styled.input`
${({ theme }) => css`
    display: flex;
    border-radius: 8px;
    width: 100%;
    height: 60px;
    border: none;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    color: #2c2c2c;

    ::placeholder {
      padding: 0 20px;
      color: #a0aec0;
    }
    
  `}
`;

// Fazer estilo do input conforme estilo do botão curso React Avançado