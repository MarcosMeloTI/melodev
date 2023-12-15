import styled, { keyframes } from 'styled-components'

const colorAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 2px #8284FA;
  }
  50% {
    box-shadow: 0 0 0 2px purple;
  }
`

export const ProjectsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-700']};

  display: flex;
  flex-direction: column;

  padding: 5rem;
  gap: 3rem;

  h1 {
    font-family: 'Josefin Sans', sans-serif;

    span {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['purple-dark']};
    transition: 0.2s cubic-bezier(0.55, 0.025, 0.675, 0.97);

    &:hover {
      color: ${({ theme }) => theme.colors.purple};
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      transition: width 0.3s;
      background-color: ${({ theme }) => theme.colors['purple-dark']};
    }

    &:hover::after {
      width: 100%;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['gray-300']};
  }
`

export const Project1 = styled.div`
  width: 15rem;
  height: 15rem;
  padding: 1.5rem;
  gap: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  animation: ${colorAnimation} 3s linear infinite;
`

export const Project2 = styled.div`
  width: 15rem;
  height: 15rem;
  padding: 1.5rem;
  gap: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${colorAnimation} 3s linear infinite;
`

export const Project3 = styled.div`
  width: 15rem;
  height: 15rem;
  padding: 1.5rem;
  gap: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${colorAnimation} 3s linear infinite;
`
