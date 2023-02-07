import styled from "styled-components";


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
  `;
const Wrap =styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin: 0px auto;
  transform: translate(-50%,-50%);
  height: 300px;
  width: 100%;
  background-color: var(--color-white);
  border-radius: 20px;
  @media (min-width: 576px) {
    top: 50%;
    height: 400px;
    width: 500px;
  }
  @media (min-width: 768px) {
    top: 50%;
    height: 450px;
    width: 600px;
  }
  @media (min-width: 992px) {
    height: 500px;
    width: 800px;
  }
  `

const Modal = ()=>{

  const ToggleModal=()=>{

  }

   return (
    <>
      {/* {modal && ( */}
        <ModalContainer>
          <Overlay onClick={ToggleModal}></Overlay>
          <Wrap>

          </Wrap>

        </ModalContainer>
      {/* )} */}
    </>
  );
}

export default Modal;