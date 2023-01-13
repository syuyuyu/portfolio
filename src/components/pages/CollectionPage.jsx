import { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'
import styled from 'styled-components'
import CollectionCardItem from '../items/CollectionCardItem'


const CollectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`
const CollectionCardList = styled.div`
  margin: 1rem 0;
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,500px));
  grid-auto-rows: min-content;
  grid-gap: .2rem;
  
  @media (min-width: 576px) {

  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2,minmax(150px,500px));
    
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3,minmax(150px,500px));
    
  }
  @media (min-width: 1200px) {

  }


`

const CollectionPage=()=>{
  const images = useContext(ImgContext)

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
      </CollectionCardList>
    </CollectionContainer>
    </>
  )
}

export default CollectionPage;