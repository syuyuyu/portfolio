import styled from 'styled-components'
import { useContext,useEffect,useState } from 'react'
import { ImgContext } from '../context/ImgContext'
import MainCardList from '../section/MainCardList'
import ImgMain from '../ImgMain'
import Modal from '../modals/Modal'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  `
const ImgContainer = styled.div`
  width: 100%;
  margin: 3rem 0 0 0;
  padding-bottom:3rem;
  max-height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 100vw;
  @media (min-width: 576px) {
    margin: 3rem 0 0 0;
    max-height: 100vh;
  }
  @media (min-width: 768px) {
    margin: 5rem 0 0 0;
  }
  h1{
    position: absolute;
    color: var(--color-white);
    top:50%;
    transform: translateY(-50%);
    text-shadow: 3px 3px 3px var(--color-dark80);
    @media (min-width: 992px) {
      top:0%;
      transform: translateY(300%);
    }
  }

  .main{
    display: block;
  }
  .mainPng{
    display: none;
  }
  @media (min-width: 992px) {
    height: 600px;
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
  const [pointMove,setPointMove]=useState();
  const items = document.querySelectorAll('.main-item'); //Y軸滾動

  //圖片模糊 - 游標左右移動效果
  const handleMouseMove=(e)=>{
    let percentage = e.clientX / window.outerWidth; //螢幕左到右的值
    setPointMove(percentage)
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


//Y軸滾動 item滑入滑出效果
  useEffect(()=>{
    const handleScrollY =()=>{
      let triggerBottom = window.innerHeight*0.8
      
      items.forEach(item=>{
        const itemTop =  item.getBoundingClientRect().top

        if(itemTop < triggerBottom){
          item.classList.add('show')
        }else{
          item.classList.remove('show')
        }
      })
  }
  window.addEventListener('scroll', handleScrollY);
},[items])



  return(
    <>
    <Container>
      <ImgContainer onMouseMove={(e)=>handleMouseMove(e)}>
        <h1>-Welcome-</h1>
        <ImgMain url={images.main} name='main'></ImgMain>
        <ImgMain url={images.main01} name='mainPng'></ImgMain>
        <ImgMain url={images.main02} name='mainPng'></ImgMain>
        <ImgMain url={images.main03} name='mainPng'></ImgMain>
      </ImgContainer>
      <MainCardList />
      <Modal />
    </Container>
    </>
  )
}

export default MainPage;