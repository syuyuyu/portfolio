import styled from "styled-components";
import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import MainCardItem from "../items/MainCardItem";

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden; //將超出的main-item隱藏
`
const CardList = styled.div`
  margin: 5px;
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,500px));
  grid-auto-rows: min-content;
  grid-gap: 1.2rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2,minmax(150px,550px));
  }
`


const MainCardList = ()=>{
  const images = useContext(ImgContext);

  return(
    <>
      <CardContainer>
        <CardList>
          <MainCardItem url={images.illustration} type='插 畫' typeName='illustration' claName='main-item'/>
          <MainCardItem url={images.watercolor} type='水 彩' typeName='watercolor' claName='main-item'/>
          <MainCardItem url={images.digitizer} type='電 繪' typeName='digitizer' claName='main-item'/>
          <MainCardItem url={images.stickers} type='貼 圖' typeName='stickers' claName='main-item'/>
          <MainCardItem url={images.illustration} type='插 畫' typeName='illustration' claName='main-item'/>
          <MainCardItem url={images.watercolor} type='水 彩' typeName='watercolor' claName='main-item'/>
          <MainCardItem url={images.digitizer} type='電 繪' typeName='digitizer' claName='main-item'/>
          <MainCardItem url={images.stickers} type='貼 圖' typeName='stickers' claName='main-item'/>
        </CardList>
      </CardContainer>
    </>
  )
}

export default MainCardList;