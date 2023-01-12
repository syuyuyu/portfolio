import styled from 'styled-components';


const StyleWindow = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0px auto;
  min-width: 330px;
`

const StyleSection = styled.div`
//mobile first 最小開發尺寸320
  min-width: 320px;
  min-height: 100vh;
  margin: 0px auto;
  /* background-color: var(--color-warm); */
  padding-bottom: 2.5rem;

  @media (min-width: 576px) {
    width: 560px;
    
  }
  @media (min-width: 768px) {
    width: 750px;
    
  }
  @media (min-width: 992px) {
    width: 980px;
    
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`

const LayoutMain =({children})=>{
  return(
   <>
    <StyleWindow>
      <StyleSection>
        {children}
      </StyleSection>
    </StyleWindow>
   </> 
  )
}

export default LayoutMain;