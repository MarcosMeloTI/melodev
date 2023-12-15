import styled from 'styled-components'

export const ExpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

  a {
    color: ${({ theme }) => theme.colors['gray-100']};
    background-color: ${({ theme }) => theme.colors['gray-700']};
    font-size: ${({ theme }) => theme.fontSize.md};

    width: 14rem;
    height: 3rem;
    padding: 1rem;

    border: none;
    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors['gray-800']};
    }
  }

  .selected {
    color: ${({ theme }) => theme.colors['purple-dark']};
    background-color: #070707;
    border-left: solid 2px #5e60ce;
  }
`

export const DescContainer1 = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 1rem;

  border: solid 2px #0d0d0d;
  border-radius: 0.5rem;

  span {
    display: flex;
    justify-content: space-between;

    h4 {
      color: ${({ theme }) => theme.colors['gray-300']};
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.purple};
  }

  p {
    color: ${({ theme }) => theme.colors['gray-300']};
  }
`

export const DescContainer2 = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;

  padding: 1rem;

  border: solid 2px #0d0d0d;
  border-radius: 0.5rem;

  span {
    display: flex;
    justify-content: space-between;

    h4 {
      color: ${({ theme }) => theme.colors['gray-300']};
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.purple};
  }

  p {
    color: ${({ theme }) => theme.colors['gray-300']};
  }
`
export const ContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 4rem 5rem 5rem 5rem;
  gap: 1rem;

  h1 {
    font-family: 'Josefin Sans', sans-serif;

    span {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`
