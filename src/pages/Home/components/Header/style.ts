import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 4rem 1rem 4rem;
  background-color: ${({ theme }) => theme.colors['gray-600']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  img {
    width: 8rem;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['gray-300']};
    transition: 0.2s cubic-bezier(0.55, 0.025, 0.675, 0.97);

    &:hover {
      color: ${({ theme }) => theme.colors['gray-100']};
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      transition: width 0.3s;
      background-color: ${({ theme }) => theme.colors['purple-dark']};
    }

    &:hover::after {
      width: 100%;
    }
  }
`
