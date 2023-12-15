import {
  Project1,
  Project2,
  Project3,
  ProjectsContainer,
  ProjectsWrapper,
} from './style'

export const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <h1>
        Projects <span>.</span>
      </h1>
      <ProjectsWrapper>
        <Project1>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur
            adipisicing elit.
          </p>
          <a href="#">click me</a>
        </Project1>
        <Project2>Em breve!</Project2>
        <Project3>Em breve!</Project3>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
