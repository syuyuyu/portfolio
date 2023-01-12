import styled from "styled-components";
import HeaderButton from "../HeaderButton";
import HeaderIcon from "../HeaderIcon";

const StyleHeader =styled.div`
  height: 50px;
  width: 100%;
  padding-right: 10px;
  background-color: var(--color-dark80);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    
  }
  @media (min-width: 768px) {
    height: 70px;
    
  }
  @media (min-width: 992px) {
    height: 80px;
    
  }
  @media (min-width: 1200px) {
    
  }
`
const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
`

const Header =()=>{
  return(
    <>
    <StyleHeader>
      <ButtonContainer>
        <HeaderButton name='首頁'/>
        <HeaderButton name='作品'/>
        <HeaderButton name='關於'/>
      </ButtonContainer>
      <div>
        <HeaderIcon svg='--svg-instagram'/>
        <HeaderIcon svg='--svg-line'/>
      </div>
    </StyleHeader>

    </>
  )
}

export default Header;