import { HeaderContainer } from './styles';
import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <h1>GITHUB BLOG</h1>
    </HeaderContainer>
  );
}
