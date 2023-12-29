import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  background-image: url('https://wallpapercave.com/uwp/uwp4191109.jpeg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const AboutArea = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-600']};

  padding: 3rem;
  gap: 8rem;

  width: 90%;
  height: 70%;
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
  max-width: 35rem;

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

  p {
    letter-spacing: 0.25px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors['gray-300']};
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
