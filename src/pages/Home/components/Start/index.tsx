import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import coding from '../../../../assets/023-Computer-Programmer.svg'
import { ButtonContainer, StartContainer, TitleContainer } from './style'

export const Start = () => {
  const typedP = useRef(null)

  useEffect(() => {
    const optionsP = {
      strings: ['Desenvolvedor Front-End .  💻'],
      typeSpeed: 40,
      showCursor: false,
    }

    const typedPInstance = new Typed(typedP.current, optionsP)

    return () => {
      typedPInstance.destroy()
    }
  }, [])

  return (
    <StartContainer id="Home">
      <TitleContainer>
        <h1>
          Marcos Melo <span>.</span>
        </h1>
        <p ref={typedP}></p>
        <ButtonContainer
          href="https://www.linkedin.com/in/marcosmeloti/"
          target="_blank"
        >
          LinkedIn
        </ButtonContainer>
      </TitleContainer>
      <img src={coding} alt="codingPhoto" />
    </StartContainer>
  )
}
