import styled from 'styled-components'


const ImgContainer =styled.img`
  height: auto;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(var(--offset));
  filter: blur(var(--blur));

  @media (min-width: 768px) {
    height: 500px;
  }
`
const ImgMain = ({url,className})=>{
  return<ImgContainer src={url} className={className}></ImgContainer>
}

export default ImgMain;