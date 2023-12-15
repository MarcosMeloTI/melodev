import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-image: url('src/assets/161.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem;
`

export const AboutArea = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-600']};

  padding: 3rem;
  gap: 17rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1rem;

  img {
    width: 100%;
    max-width: 20rem;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  max-width: 26rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 2rem;

  h1 {
    font-family: 'Josefin Sans', sans-serif;

    span {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  ul {
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;

      border-radius: 0.2rem;

      cursor: pointer;

      background-color: ${({ theme }) => theme.colors['gray-700']};
      color: ${({ theme }) => theme.colors['purple-dark']};

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-800']};
      }
    }
  }
`
