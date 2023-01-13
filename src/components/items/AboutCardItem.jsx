import ImgItem from "./ImgItem";
import styled from "styled-components";


const CardItemContainer = styled.div`
  border: 2px solid grey;
  height: 200px;
  border-radius: 10px;
  margin: 10px 0;
  
  @media (min-width: 768px) {
    min-height: 400px;
  }
`

const Info =styled.div``


const AboutCardItem = ({url})=>{

  return (
    <>
    <CardItemContainer>
      <ImgItem url={url}></ImgItem>
      <Info></Info>
    </CardItemContainer>
    </>
  )
}

export default AboutCardItem;