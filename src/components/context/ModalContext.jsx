import { useContext,useState,createContext } from "react";

const ModalContext = createContext(false);
export const useModal =()=>useContext(ModalContext);

export const ModalProvider = ({children})=>{
  const [toggleModal,setToggleModal]=useState(false);

  const HandleToggleModal =()=>{
    setToggleModal(!toggleModal);
    console.log('HandleToggleModal')
  }
  const value={toggleModal,setToggleModal,HandleToggleModal}

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  
}