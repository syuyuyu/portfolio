import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import styled from 'styled-components'
import AboutCardItem from '../items/AboutCardItem'


const AboutContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
`
const AboutCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px auto 5px auto;
  min-width: 200px;

`

const AboutPage = ()=>{
  const images = useContext(ImgContext)

  return(
    <>
    <AboutContainer>
      <AboutCardList>
          <AboutCardItem url={images.illustration} name='插畫'/>
          <AboutCardItem url={images.watercolor} name='水彩'/>
          <AboutCardItem url={images.digitizer} name='電繪'/>
          <AboutCardItem url={images.stickers} name='貼圖'/>
      </AboutCardList>
    </AboutContainer>
    </>
  )
}

export default AboutPage;