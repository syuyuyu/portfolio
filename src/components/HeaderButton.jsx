import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  /* margin: 0 3px; */
  cursor: pointer;
  :hover{
    background-color: var(--color-dark70);
  }
`
const StyleBackground= styled.div``
const Button = styled.div`
  /* text-align: center; */
  color: var(--color-white);
  :hover{
    transform:translate(0px,-2px);
  }
`



const HeaderButton = ({name,linkTo}) =>{
  const navigate = useNavigate();

  return(
    <>
      <StyleContainer onClick={()=>navigate(`${linkTo}`)}>
        <Button>
        <StyleBackground>
          <h5>{name}</h5>
          </StyleBackground>
        </Button>
      </StyleContainer>
    </>
  )
}

export default HeaderButton;