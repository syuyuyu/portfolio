import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import styled from 'styled-components'
import CollectionCardItem from '../items/CollectionCardItem'


const CollectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`
const CollectionCardList = styled.div`
  margin: 1rem 0;
  height: 100%;
  column-count: 1;
  column-gap:10px;
  overflow: hidden;
  
  
  @media (min-width: 576px) {
    width: 110%;
    column-count: 3;
  }
  /* @media (min-width: 768px) {
    column-count: 3;
  } */
  @media (min-width: 992px) {
    column-count: 5;
  }
`

const CollectionPage=()=>{
  const images = useContext(ImgContext);

  return(
    <>
    <CollectionContainer>
      <CollectionCardList>
          <CollectionCardItem url={images.collection01}/>
          <CollectionCardItem url={images.collection02}/>
          <CollectionCardItem url={images.collection03}/>
          <CollectionCardItem url={images.collection04}/>
          <CollectionCardItem url={images.collection05}/>
          <CollectionCardItem url={images.collection06}/>
          <CollectionCardItem url={images.collection07}/>
          <CollectionCardItem url={images.collection08}/>
          <CollectionCardItem url={images.collection09}/>
          <CollectionCardItem url={images.collection10}/>

          <CollectionCardItem url={images.collection01}/>
          <CollectionCardItem url={images.collection02}/>
          <CollectionCardItem url={images.collection03}/>
          <CollectionCardItem url={images.collection04}/>
          <CollectionCardItem url={images.collection05}/>
          <CollectionCardItem url={images.collection06}/>
          <CollectionCardItem url={images.collection07}/>
          <CollectionCardItem url={images.collection08}/>
          <CollectionCardItem url={images.collection09}/>
          <CollectionCardItem url={images.collection10}/>
      </CollectionCardList>
    </CollectionContainer>
    </>
  )
}

export default CollectionPage;