import styled from 'styled-components'


const ImgContainer =styled.img`
  height: auto;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 500px;
  }
`
const ImgMain = ({url})=>{
  return<ImgContainer src={url}></ImgContainer>
}

export default ImgMain;