import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xxlarge};
    width: 60rem;
    height: 40rem;
    background: ${theme.colors.lightGreen};
    border-radius: ${theme.border.radius};
  `}
`
