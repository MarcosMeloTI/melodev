import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Start } from './components/Start'
import { HomeContainer } from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Start />
      <About />
      <Experiences />
      <Projects />
    </HomeContainer>
  )
}
