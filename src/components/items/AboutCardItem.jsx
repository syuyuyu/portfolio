import ImgItem from "./ImgItem";
import styled from "styled-components";


const CardItemContainer = styled.div`
  border-top:.5px solid var(--color-dark20);
  border-bottom:1px solid var(--color-dark20);
  border-left:1px solid var(--color-dark20);
  height: 150px;
  /* border-radius: 10px; */
  margin: 5px 0;
  max-width: 700px;
  width: 100%;
  display: flex;



  @media (min-width: 768px) {
    min-height: 200px;
  }
`
const Imgbox = styled.div`
  width: 100%;
`
const Info = styled.div`
  width: 80%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  /* background:linear-gradient(方向, 顏色1 位置, 顏色2 位置); */
  background: linear-gradient(90deg,rgba(225, 147, 1, 0.8),rgba(255, 255, 255, 0.5));
`

const AboutCardItem = ({url,name})=>{

  return (
    <>
    <CardItemContainer>
      <Imgbox>
        <ImgItem url={url}></ImgItem>
      </Imgbox>
      <Info>
        <h3>{name}</h3>
        <p>adfasf</p>
      </Info>
    </CardItemContainer>
    </>
  )
}

export default AboutCardItem;