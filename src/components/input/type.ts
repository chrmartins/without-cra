export type InputProps = {
  name: string
  type?: string
  label?: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}
