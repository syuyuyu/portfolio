import styled from 'styled-components'
import { useContext,useEffect,useState } from 'react'
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
 
  .main{
    display: block;
  }
  .mainPng{
    display: none;
  }
  @media (min-width: 992px) {
    margin-bottom:510px ;
    .main{
      display: none;
    }
    .mainPng{
      display: block;
    }
  }

`


const MainPage =()=>{
  const images = useContext(ImgContext)
  const imgs = document.querySelectorAll('.mainPng') //取得全部的圖片
  const [pointMove,setPointMove]=useState()
  
  const handleMouseMove=(e)=>{
    let percentage = e.clientX / window.outerWidth; //螢幕左到右的值
    setPointMove(percentage)
    console.log(percentage)
    let offset = 5*percentage; //定義分層圖片位置的距離
    let blur = 15; //模糊度 預設為20
    for(let [index,img] of imgs.entries()){ //將offset,blur發送給每個img
      offset *= 1.3 //越後面的圖片位移越多
      let blurValue = (Math.pow((index/imgs.length - percentage+0.2),2)*blur); //分層模糊度的值
      img.style.setProperty('--offset',`${offset}px`)
      img.style.setProperty('--blur',`${blurValue}px`)
    }
  };

  useEffect(()=>{
    setPointMove(0)
  },[pointMove])


  return(
    <>
    <Container>
      <ImgContainer onMouseMove={(e)=>handleMouseMove(e)}>
        <ImgMain url={images.main} name='main'></ImgMain>
        <ImgMain url={images.main01} name='mainPng'></ImgMain>
        <ImgMain url={images.main02} name='mainPng'></ImgMain>
        <ImgMain url={images.main03} name='mainPng'></ImgMain>
      </ImgContainer>
      <MainCardList />
    </Container>
    </>
  )
}

export default MainPage;