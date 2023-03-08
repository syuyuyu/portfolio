import styled from "styled-components";
import HeaderButton from "../HeaderButton";
import HeaderIcon from "../HeaderIcon";
import { useBurger } from "../context/BurgerContext";

const StyleHeader =styled.div`
  height: 50px;
  width: 100%;
  min-width: 330px;
  min-height: 50px;
  padding-right: 10px;
  background-color: var(--color-dark80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 70px;
  }
  @media (min-width: 992px) {
    height: 80px;
  }
`
const ButtonContainer = styled.div`
  display: none;
  @media (min-width: 576px) {
    position: relative;
    background-color: var(--color-dark80);
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`
const Burger = styled.div`
  height:100%;
  cursor: pointer;
  @media (min-width: 576px) {
    display: none;
  }
`
const BurgerButton = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: var(--color-dark80);
  width: 100%;
  @media (min-width: 576px) {
    display: none;
  }
`

const Line = styled.div`
  content: '';
  width: 30px;
  height: 3px;
  background-color: var(--color-white);
  position: relative;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  ::before{
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    top: 20px;
    left: 0;
    background-color: var(--color-white);
    transform: translateY(-30px);
  }
  ::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    top: 40px;
    left: 0;
    background-color: var(--color-white);
    transform: translateY(-30px);
  }
`

const IconContainer=styled.div`
  display: flex;
`

const Header =()=>{
  const {toggleBurger,onToggleBurger} = useBurger();

  // const handleClickLine=()=>{
  //   // https://www.instagram.com/yuyuu1992/
  //   alert('錯囉')
  // }

  return(
    <>
    <StyleHeader>
      <Burger onClick={onToggleBurger}>
        <Line></Line> 
      </Burger>
      {toggleBurger &&
        <BurgerButton>
          <HeaderButton name='首頁' linkTo='/main'/>
          <HeaderButton name='作品' linkTo='/collection'/>
          <HeaderButton name='關於' linkTo='/about'/>
        </BurgerButton>
      }
      <ButtonContainer>
        <HeaderButton name='首頁' linkTo='/main' />
        <HeaderButton name='作品' linkTo='/collection' />
        <HeaderButton name='關於' linkTo='/about' />
      </ButtonContainer>
      <IconContainer>
        <HeaderIcon svg='--svg-instagram'/>
        <HeaderIcon svg='--svg-line'/>
      </IconContainer>
    </StyleHeader>

    </>
  )
}

export default Header;