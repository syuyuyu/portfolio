import ImgItem from "./ImgItem";
import styled from "styled-components";
import { useModal } from "../context/ModalContext";


const CardItemContainer = styled.div`
  border: 1px solid grey;
  height: 200px;
  border-radius: 5px;
  position:relative;
  cursor: pointer;
  :hover .backgroundCover{
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s .15s, opacity .15s linear;
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
  visibility: visible;
  opacity: 1;
  transition: opacity .12s linear;
`


const MainCardItem = ({url,type,typeName})=>{
  const {HandleToggleModal} = useModal();

  return (
    <>
      <CardItemContainer onClick={()=>HandleToggleModal(typeName)}>
        <BackgroundCover className='backgroundCover'><h4>{type}</h4></BackgroundCover>
        <ImgItem url={url}></ImgItem>
      </CardItemContainer>
    </>
  )
}

export default MainCardItem;