import { useState } from "react";
import styled from "styled-components";
import ImgItem from "./ImgItem";

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  min-width: 100%;
  .hover{
    /* width: 200%; */
    /* height: 200%; */
    border-radius: 10px;
    position: relative;
    margin: auto 0;
    right: 0;
    box-shadow: 0px 0px 10px 0px var(--color-dark60);
    cursor: pointer;
  }
`

// const Info =styled.div``


const CollectionCardItem = ({url})=>{
  const [isHover,setIsHover]=useState(false);

  const handleMouseOver=(e)=>{
    setIsHover(true)
    e.target.classList.add('hover')
    // console.log(e)
  }
  const handleMoverLeave=(e)=>{
    setIsHover(false)
    e.target.classList.remove('hover')
  }

  return (
    <>
    <CardItemContainer
    onMouseEnter={(e)=>handleMouseOver(e)} 
    onMouseLeave={(e)=>handleMoverLeave(e)}
    // style={{
    //   width:isHover?'200%':'100%',
    //   height:isHover? '200%':'100%',
    //   ZIndex:isHover?'3':''}}
    >
      <ImgItem url={url}></ImgItem>
      {/* <Info></Info> */}
    </CardItemContainer>
    </>
  )
}

export default CollectionCardItem;