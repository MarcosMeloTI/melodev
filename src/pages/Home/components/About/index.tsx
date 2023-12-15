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
            Lorem ipsum dolor sit amet. Sit dolore corrupti id sint optio et
            facilis inventore ut magnam quos quo magni temporibus At reiciendis
            sequi rem ipsam provident.
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
