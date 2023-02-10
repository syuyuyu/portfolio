import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { Images } from '../context/ImgContext'


const ImgContainer =styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`
const ImgItem = ({url,urlName})=>{
  const [imgName,setImgName] = useState('');
  
  //依照urlName判斷圖片檔是哪一張
  useEffect(()=>{
    if(urlName === 'illustration'){
      setImgName(Images.illustration)
    }
    if(urlName === 'watercolor'){
      setImgName(Images.watercolor)
    }
    if(urlName === 'digitizer'){
      setImgName(Images.digitizer)
    }
    if(urlName === 'stickers'){
      setImgName(Images.stickers)
    }
  },[urlName])

  return<ImgContainer src={url?url:imgName}></ImgContainer>
}

export default ImgItem;