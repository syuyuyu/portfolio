import { useContext,useState,createContext } from "react";
import { ModalData } from "../../constants/models";

const ModalContext = createContext(false);
export const useModal =()=>useContext(ModalContext);

export const ModalProvider = ({children})=>{
  const [toggleModal,setToggleModal]=useState(false);
  const [type,setType] = useState('');
  const [title,setTitle] = useState('');
  const [tool,setTool] = useState('');
  const [content,setContent] = useState('');

  const HandleToggleModal =(typeName)=>{
    setToggleModal(!toggleModal);
    setType(typeName)
    if(typeName === 'illustration'){
      setTitle(ModalData.illustration.title)
      setTool(ModalData.illustration.tool)
      setContent(ModalData.illustration.content)
    }
    if(typeName === 'watercolor'){
      setTitle(ModalData.watercolor.title)
      setTool(ModalData.watercolor.tool)
      setContent(ModalData.watercolor.content)
    }
    if(typeName === 'digitizer'){
      setTitle(ModalData.digitizer.title)
      setTool(ModalData.digitizer.tool)
      setContent(ModalData.digitizer.content)
    }
    if(typeName === 'stickers'){
      setTitle(ModalData.stickers.title)
      setTool(ModalData.stickers.tool)
      setContent(ModalData.stickers.content)
    }
  };

  const value={
    toggleModal,
    setToggleModal,
    HandleToggleModal,
    type,
    title,tool,content,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  
}