import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const StyleContainer = styled.div`
  cursor: pointer;
  height: 40px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    background-color: var(--color-dark70);
}
  @media (min-width: 576px) {
    width: 70px;
    height: 100%;
}
`


const Button = styled.div`
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
          {/* <StyleBackground> */}
            <h5>{name}</h5>
          {/* </StyleBackground> */}
        </Button>
      </StyleContainer>
    </>
  )
}

export default HeaderButton;