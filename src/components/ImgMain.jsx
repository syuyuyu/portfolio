import styled from 'styled-components'


const Img =styled.img`
  height: auto;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    transform: translateX(var(--offset));
    filter: blur(var(--blur));
    position: absolute;
  }


`
const ImgMain = ({url,name})=>{
  return<Img src={url} className={name}></Img>
}

export default ImgMain;