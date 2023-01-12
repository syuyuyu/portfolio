import ImgItem from "./ImgItem";
import styled from "styled-components";


const CardItemContainer = styled.div`
  border: 2px solid grey;
  height: 200px;
  border-radius: 10px;
  
  @media (min-width: 768px) {
    height: 260px;
  }
`

const Info =styled.div``


const CardItem = ({url})=>{

  return (
    <>
    <CardItemContainer>
      <ImgItem url={url}></ImgItem>
      <Info></Info>
    </CardItemContainer>
    </>
  )
}

export default CardItem;