import styled from 'styled-components'
import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import MainCardList from '../section/MainCardList'
import ImgMain from '../ImgMain'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
const ImgContainer = styled.div`
  width: 100%;
  margin: 1rem 0px;
  max-height: 500px;
`


const MainPage =()=>{
  const images = useContext(ImgContext)
  return(
    <>
    <Container>
      <ImgContainer>
        <ImgMain url={images.main}></ImgMain>
      </ImgContainer>
      <MainCardList />
    </Container>
    </>
  )
}

export default MainPage;