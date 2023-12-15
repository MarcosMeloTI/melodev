import logo from '../../../../assets/MeloDev-White.png'
import { HeaderContainer, MenuContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo-Melodev" />
      <MenuContainer>
        <a href="#Home">Início</a>
        <a href="#About">Sobre mim</a>
        <a href="#Experiences">Experiências</a>
        <a href="#Projects">Projetos</a>
        <a href="">Serviços</a>
        <a href="">Conhecimentos</a>
      </MenuContainer>
    </HeaderContainer>
  )
}
