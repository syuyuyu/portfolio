import styled from 'styled-components'

const StyleContainer = styled.div`
  height: 30px;
  width: 30px;
  display: inline-block;
  margin: 0 3px;
  
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  cursor: pointer;
  :hover{
    transform:translate(0px,-2px);
  }
  @media (min-width: 576px) {
    /* width: 560px; */
  }
  @media (min-width: 768px) {
    /* width: 750px; */
    height: 40px;
    width: 40px;
    
  }
  @media (min-width: 992px) {
    /* width: 980px; */
    
  }
  @media (min-width: 1200px) {
    /* width: 1140px; */

  }

`

const HeaderIcon = ({svg})=>{
  return <StyleContainer style={{backgroundImage:`var(${svg})`}}></StyleContainer>
}
export default HeaderIcon;