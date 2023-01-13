import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import styled from 'styled-components'
import MainCardList from '../section/MainCardList'
import ImgItem from '../ImgItem'
import AboutCardItem from '../section/AboutCardItem'


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
const AboutCardList = styled.div`
`

const AboutPage = ()=>{
  const images = useContext(ImgContext)

  return(
    <>
    <AboutContainer>
      <AboutCardList>
          <AboutCardItem url={images.illustration}/>
          <AboutCardItem url={images.watercolor}/>
          <AboutCardItem url={images.digitizer}/>
          <AboutCardItem url={images.stickers}/>
      </AboutCardList>
    </AboutContainer>
    </>
  )
}

export default AboutPage;