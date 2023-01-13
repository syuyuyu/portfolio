import styled from 'styled-components'
import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import MainCardList from '../section/MainCardList'
import ImgMain from '../ImgMain'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  `
const ImgContainer = styled.div`
background-color: var(--color-dark80);
  width: 100%;
  height: auto;
  margin: 1rem 0px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 500px; //暫用margin把MainCardList往下移
  box-shadow: 5px 6px 4px -1px #9DA4AD;

`


const MainPage =()=>{
  const images = useContext(ImgContext)
  const imgs = document.querySelectorAll('.main') //取得全部的圖片
  

  const handleMouseMove=(e)=>{
    let percentage = e.clientX / window.outerWidth; //螢幕左到右的值
    let offset = 3*percentage; //定義分層圖片位置的距離
    let blur = 10; //模糊度 預設為20
    for(let [index,img] of imgs.entries()){ //將offset,blur發送給每個img
      // offset *= 1.3 //越後面的圖片位移越多
      let blurValue = (Math.pow((index/imgs.length - percentage+0.2),2)*blur); //分層模糊度的值
      img.style.setProperty('--offset',`${offset}px`)
      img.style.setProperty('--blur',`${blurValue}px`)
    }
  };


  return(
    <>
    <Container>
      <ImgContainer onMouseMove={(e)=>handleMouseMove(e)}>
        <ImgMain url={images.main01} className='main'></ImgMain>
        <ImgMain url={images.main02} className='main'></ImgMain>
        <ImgMain url={images.main03} className='main'></ImgMain>
      </ImgContainer>
      <MainCardList />
    </Container>
    </>
  )
}

export default MainPage;