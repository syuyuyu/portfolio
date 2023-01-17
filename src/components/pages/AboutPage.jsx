import { useContext,useEffect,useState } from 'react'
import { ImgContext } from '../context/ImgContext'
import styled from 'styled-components'
import AboutCardItem from '../items/AboutCardItem'


const AboutContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
`
const AboutCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px auto 5px auto;
  min-width: 200px;
`
const AboutContent = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    height: 450px;
  }
  @media (min-width: 768px) {
    height: 550px;
  }
  @media (min-width: 992px) {
    height: 650px;
  }
`


const AboutPage = ()=>{
  const images = useContext(ImgContext);
  const items = document.querySelectorAll('.aboutImg');
  const html = document.documentElement;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(()=>{
      const handleScroll =()=>{
        setScrollTop(window.scrollY);
        // html.scrollTop 等於window.scrollY
        // document.addEventListener('scroll', () => {
        let scrolled = scrollTop / (html.scrollHeight - html.clientHeight)
        let total =  1 / items.length
        for (let [index, item] of items.entries()) {
          let start = total * index
          let end = total * (index + 1)        
          let progress = (scrolled - start) / (end - start)
          if (progress >= 1) progress = 1
          if (progress <= 0.5) progress = 0
          item.style.setProperty('--progress', progress)
        }
    // })
  }

    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
      setScrollTop(window.scrollY);
    }
  },[html.clientHeight, html.scrollHeight, html.scrollTop, items,scrollTop])


  return(
    <>
    <AboutContainer>
      <AboutContent>
        <h1>四大類型</h1>
        <h3>請往下拉</h3>
      </AboutContent>
      <AboutCardList>
          <AboutCardItem url={images.illustration} type='插畫' name='aboutImg'/>
          <AboutCardItem url={images.watercolor} type='水彩' name='aboutImg'/>
          <AboutCardItem url={images.digitizer} type='電繪' name='aboutImg'/>
          <AboutCardItem url={images.stickers} type='貼圖' name='aboutImg'/>
      </AboutCardList>
    </AboutContainer>
    </>
  )
}

export default AboutPage;