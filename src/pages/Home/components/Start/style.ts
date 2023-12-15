import styled from 'styled-components'

export const StartContainer = styled.div`
  height: 100vh;
  max-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 4rem;
  gap: 10rem;

  background-color: ${({ theme }) => theme.colors['gray-600']};

  img {
    width: 100%;
    max-width: 35rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: ${({ theme }) => theme.lineHeight.small};

  gap: 1rem;

  h1 {
    font-family: 'Josefin Sans', sans-serif;

    span {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  p {
    margin-bottom: 1rem;
  }
`

export const ButtonContainer = styled.a`
  width: 20rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: ${({ theme }) => theme.colors['gray-100']};
  background-color: ${({ theme }) => theme.colors['purple-dark']};
  font-size: ${({ theme }) => theme.fontSize.md};

  border: none;
  border-radius: 0.2rem;

  cursor: pointer;

  transition: 0.6s cubic-bezier(0.55, 0.025, 0.675, 0.97);

  &:hover {
    width: 22rem;
    transition: width 0.6s;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`
