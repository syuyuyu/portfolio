import styled from 'styled-components'

const StyleContainer = styled.div`
  height: 40px;
  width: 40px;
  /* border: 1px solid white; */
  /* border-radius: 50%; */
  display: inline-block;
  margin: 0 3px;
  
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  cursor: pointer;
  :hover{
    transform:translate(0px,-2px);
  }
`

const HeaderIcon = ({svg})=>{
  return(
    <>
    <StyleContainer style={{backgroundImage:`var(${svg})`}}>

    </StyleContainer>
    </>
  )
}
export default HeaderIcon;