import { Home } from './components/pages/home/Home';
import './styles/global.scss';
import { InputProps } from './components/input/type';

export function App({...props}: InputProps) {
  return (
    <>
      <Home {...props}/>
    </>
  )
}