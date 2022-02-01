import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    border-radius: ${theme.border.radius};
    width: 100%;
    height: ${theme.spacings.xxlarge};
    border: 1px solid ${theme.colors.lightGrey};
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.small};
    outline: none;
    color: ${theme.colors.darkGrey};

    ::placeholder {
      color: ${theme.colors.lightGrey};
    }
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.small};
    font-size: ${theme.spacings.small};
    color: ${theme.colors.grey};
    font-weight: 400;
    padding-bottom: ${theme.spacings.xsmall};
  `}
`
