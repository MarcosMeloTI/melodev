import { Divider } from '@mui/material'
import { useState } from 'react'
import {
  ContainerWrapper,
  DescContainer1,
  DescContainer2,
  ExpContainer,
  ListContainer,
} from './style'

export const Experiences = () => {
  const [selectedLink, setSelectedLink] = useState('link1')
  const [showDescContainer1, setShowDescContainer1] = useState(true)
  const [showDescContainer2, setShowDescContainer2] = useState(false)

  const handleClickLink = (id: string) => {
    setSelectedLink(id)
    if (id === 'link1') {
      setShowDescContainer1(true)
      setShowDescContainer2(false)
    } else if (id === 'link2') {
      setShowDescContainer1(false)
      setShowDescContainer2(true)
    }
  }

  return (
    <ContainerWrapper id="Experiences">
      <h1>
        Experiences <span>.</span>
      </h1>
      <ExpContainer>
        <ListContainer>
          <a
            id="link1"
            className={selectedLink === 'link1' ? 'selected' : ''}
            onClick={() => handleClickLink('link1')}
          >
            title
          </a>
          <Divider light />
          <a
            id="link2"
            className={selectedLink === 'link2' ? 'selected' : ''}
            onClick={() => handleClickLink('link2')}
          >
            title 2
          </a>
        </ListContainer>
        {showDescContainer1 && (
          <DescContainer1>
            <span>
              <h2>Lorem ipsum</h2>
              <h4>ago/2036-set/2056</h4>
            </span>

            <h3>title</h3>

            <p>
              Lorem ipsum dolor sit amet. Sit dolore corrupti id sint optio et
              facilis inventore ut magnam quos quo magni temporibus At
              reiciendis sequi rem ipsam provident.
            </p>
          </DescContainer1>
        )}
        {showDescContainer2 && (
          <DescContainer2>
            <span>
              <h2>Lorem ipsum 2</h2>
              <h4>ago/2036-set/2086</h4>
            </span>

            <h3>title 2</h3>

            <p>
              Lorem ipsum dolor sit amet. Sit dolore corrupti id sint optio et
              facilis inventore ut magnam quos quo magni temporibus At
              reiciendis sequi rem ipsam provident. Lorem ipsum dolor sit amet.
              Sit dolore corrupti id sint optio et facilis inventore ut magnam
              quos quo magni temporibus At reiciendis sequi rem ipsam provident.
            </p>
          </DescContainer2>
        )}
      </ExpContainer>
    </ContainerWrapper>
  )
}
