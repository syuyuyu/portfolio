import { useState } from "react";
import styled from "styled-components";
import ImgItem from "./ImgItem";

const CardItemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  /* padding-bottom: 5px; */
  min-width: 100%;
  .hover{
    /* width: 110%;
    height: 110%; */
    /* padding: 5px; */
    border-radius: 10px;
    position: relative;
    margin: auto 0;
    right: 0;
    box-shadow: 0px 0px 10px 0px var(--color-dark60);
    cursor: pointer;
  }
  .click{
    transform:rotateY(180deg);
  }
`

// const Info =styled.div``


const CollectionCardItem = ({url})=>{
  const [isClick,setIsClick]=useState(false);
  const [isHover,setIsHover]=useState(false);

  //滑鼠hover
  const handleMouseOver=(e)=>{
    if(isHover){
      setIsHover(false)
      e.target.classList.remove('hover')
      return
    }
    setIsHover(true)
    e.target.classList.add('hover')
  }
  const handleMoverLeave=(e)=>{
    // if(!isHover){
    //   setIsHover(true)
    // }
    setIsHover(false)
    e.target.classList.remove('hover')
  }

  //翻轉卡片
  const handleToggleClick=(e)=>{
    if(!isClick){
      setIsClick(true)
      e.target.classList.add('click')
      return
    }
    setIsClick(false)
    e.target.classList.remove('click')
  }

  return (
    <>
    <CardItemContainer
    onMouseEnter={(e)=>handleMouseOver(e)} 
    onMouseLeave={(e)=>handleMoverLeave(e)}
    onClick={(e)=>handleToggleClick(e)}
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