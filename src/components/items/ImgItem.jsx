import styled from 'styled-components'


const ImgContainer =styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`
const ImgItem = ({url})=>{
  return<ImgContainer src={url}></ImgContainer>
}

export default ImgItem;