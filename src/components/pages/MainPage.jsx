import styled from 'styled-components'
import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import MainCardList from '../section/MainCardList'
import ImgMain from '../ImgMain'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;
  height: 100%;
  `
const ImgContainer = styled.div`
  background-color: var(--color-dark80);
  width: 100%;
  height: auto;
  margin: 1rem 0 .3rem 0;
  max-height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
  .mainPng{
    display: none;
  }
  .main{
    display: block;
  }
  @media (min-width: 992px) {
    margin-bottom:510px ;
    
    .mainPng{
      display: block;
    }
    .main{
      display: none;
    }
    
  }

`


const MainPage =()=>{
  const images = useContext(ImgContext)
  const imgs = document.querySelectorAll('.mainPng') //取得全部的圖片
  

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
        <ImgMain url={images.main} className='main'></ImgMain>
        <ImgMain url={images.main01} className='mainPng'></ImgMain>
        <ImgMain url={images.main02} className='mainPng'></ImgMain>
        <ImgMain url={images.main03} className='mainPng'></ImgMain>
      </ImgContainer>
      <MainCardList />
    </Container>
    </>
  )
}

export default MainPage;