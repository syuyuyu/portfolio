import ImgItem from "../ImgItem";
import styled from "styled-components";


const CardItemContainer = styled.div`
  border: 1px solid grey;
  height: 260px;
  border-radius: 5px;
  /* margin: 3px 0; */
  
  @media (min-width: 768px) {
    min-height: 370px;
  }
`

const Info =styled.div``


const CollectionCardItem = ({url})=>{

  return (
    <>
    <CardItemContainer>
      <ImgItem url={url}></ImgItem>
      <Info></Info>
    </CardItemContainer>
    </>
  )
}

export default CollectionCardItem;