import styled from "styled-components";
import { useModal } from "../context/ModalContext";
import ImgItem from "../items/ImgItem";


const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
  z-index: -1;
`

const Wrap =styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  background-color: var(--color-white);
  border-radius: 20px;
  padding: 10px 0;
  @media (min-width: 576px) {
    top: 50%;
    width: 500px;
  }
  @media (min-width: 768px) {
    top: 50%;
    width: 600px;
    padding: 20px 0;
  }
  @media (min-width: 992px) {
    width: 800px;
    padding: 30px 0;
  }
  `
  const Close = styled.div`
    line-height: 20px;
    height: 20px;
    position: absolute;
    top:-20px;
    right:15px;
    cursor: pointer;
    color:var(--color-dark40);
    @media (min-width: 768px) {
      top: -25px;
    }
    @media (min-width: 992px) {
      top: -35px;
    }
  `

  const Container =  styled.div`
    width: 100%;
    position: relative;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
    }
  `

  const Row = styled.div`
    text-align: center;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    @media (min-width: 992px) {
      align-items: start;
      margin-left: 2rem;
    }
    &.row-img{
      margin: 0px auto;
      width: 100%;
      height: 300px;
      @media (min-width: 768px) {
        width: 500px;
        height: 320px;
      }
      @media (min-width: 992px) {
        margin-left: 10px;
        justify-content: flex-start;
        line-height: 20px;
      }
    }
    &.row-content{
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  `

const Modal = ()=>{
  const {toggleModal,HandleToggleModal,title,tool,content,type} = useModal();

   return (
    <>
      {toggleModal && (
        <ModalContainer>
          <Overlay onClick={HandleToggleModal}></Overlay>
          <Wrap>
            <Container>
              <Close onClick={HandleToggleModal}>關閉</Close>
              <Row className="row-img">
                <ImgItem urlName={type}></ImgItem>
              </Row>
              <Row>
                <h2 style={{padding:' 5px 0'}}>{title}</h2>
                <p style={{marginTop:' 15px'}}>{tool}</p>
              </Row>
            </Container>
            <Row className='row-content' style={{marginTop:'15px',padding:' 15px'}}>
              {content}
            </Row>
          </Wrap>

        </ModalContainer>
      )}
    </>
  );
}

export default Modal;