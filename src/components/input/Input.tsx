import * as S from './styles'
import { InputProps } from './type'

export const Input = ({
  type,
  placeholder,
  onChange,
  value,
  name
}: InputProps) => {
  return (
    <S.Container>
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
