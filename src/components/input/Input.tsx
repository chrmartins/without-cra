import * as S from './styles'
import { InputProps } from './type'

export const Input = ({
  type,
  label,
  placeholder,
  onChange,
  value,
  name
}: InputProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </S.Container>
  )
}
