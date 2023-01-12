import styled from "styled-components";
import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import CardItem from "../CardItem";

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
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
  const images = useContext(ImgContext)

  return(
    <>
      <CardContainer>
        <CardList>
          <CardItem url={images.illustration}/>
          <CardItem url={images.watercolor}/>
          <CardItem url={images.digitizer}/>
          <CardItem url={images.stickers}/>
        </CardList>
      </CardContainer>
    </>
  )
}

export default MainCardList;