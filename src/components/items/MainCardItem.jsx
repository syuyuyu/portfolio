import ImgItem from "./ImgItem";
import styled from "styled-components";


const CardItemContainer = styled.div`
  border: 1px solid grey;
  height: 200px;
  border-radius: 5px;
  position:relative;

  :hover .backgroundCover{
    /* display: none; */
    -webkit-animation: fadeOutFromNone 0.5s ease-out;
    -moz-animation: fadeOutFromNone 0.5s ease-out;
    -o-animation: fadeOutFromNone 0.5s ease-out;
    animation: fadeOutFromNone 0.5s ease-out;
  }
  
  @media (min-width: 768px) {
    height: 260px;
  }
`

const BackgroundCover = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  height: 100%;
  width: 100%;
  background-color: rgba(23, 23, 37, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`


const MainCardItem = ({url,type})=>{

  return (
    <>
      <CardItemContainer>
        <BackgroundCover className='backgroundCover'><h4>{type}</h4></BackgroundCover>
        <ImgItem url={url}></ImgItem>
      </CardItemContainer>
    </>
  )
}

export default MainCardItem;