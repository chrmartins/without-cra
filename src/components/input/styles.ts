import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
${({ theme }) => css`
    display: flex;
    border-radius: ${theme.border.radius};
    width: 100%;
    height: ${theme.spacings.xxlarge};
    border: none;
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.small};
    outline: none;
    color: ${theme.colors.darkGrey};

    ::placeholder {
      padding: 0 ${theme.spacings.small};
      color: ${theme.colors.lightGrey};
    
  `}
`;

// Fazer estilo do input conforme estilo do botão curso React Avançado