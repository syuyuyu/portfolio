import styled from "styled-components";
import ImgItem from "./ImgItem";

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  min-width: 100%;
`

// const Info =styled.div``


const CollectionCardItem = ({url})=>{

  return (
    <>
    <CardItemContainer>
      <ImgItem url={url}></ImgItem>
      {/* <Info></Info> */}
    </CardItemContainer>
    </>
  )
}

export default CollectionCardItem;