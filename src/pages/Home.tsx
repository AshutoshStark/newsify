import styled from 'styled-components'
import Carousel from '../components/Carousel'

const Home = () => {

  return (
   <MainDiv>
    <Carousel/>
   </MainDiv>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
