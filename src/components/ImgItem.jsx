import styled from 'styled-components'


const ImgMain =styled.img`
  height: auto;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 500px;
  }
`
const ImgItem = ({url})=>{
  return<ImgMain src={url}></ImgMain>
}

export default ImgItem;