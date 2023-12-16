import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import aboutPhoto from '../../../../assets/49.-Technology.svg'
import { AboutArea, AboutContainer, TextContainer } from './style'

export const About = () => {
  return (
    <AboutContainer id="About">
      <AboutArea>
        <TextContainer>
          <h1>
            About <span>.</span>
          </h1>
          <p>
            Meu nome é Marcos Melo, sou desenvolvedor Front-End há 2 anos, pós
            graduando em Engenharia Ágil de Software, atualmente sou Estagiário
            de Desenvolvimento Front-End no Grupo Parvi e Freelancer. Crio sites
            com design moderno e de alta qualidade, com foco em responsividade e
            SEO.
          </p>
          <ul>
            <a
              href="https://github.com/MarcosMeloTI"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/marcosmeloti/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </ul>
        </TextContainer>
        <img src={aboutPhoto} alt="TechPhoto" />
      </AboutArea>
    </AboutContainer>
  )
}
