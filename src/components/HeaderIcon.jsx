import styled from 'styled-components'
import Swal from 'sweetalert2'

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

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }


`

const HeaderIcon = ({svg})=>{

  const handleClick=(svg)=>{

    if(svg.includes('line')){
      Swal.fire(
        'Line ID :',
        'syuyuyu',
        'success'
)
    }else{
      window.open('https://www.instagram.com/yuyuu1992/')
    }

  }

  return <StyleContainer style={{backgroundImage:`var(${svg})`}} onClick={()=>handleClick(svg)}></StyleContainer>
}
export default HeaderIcon;