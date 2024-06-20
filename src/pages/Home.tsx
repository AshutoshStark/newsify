import styled from 'styled-components'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout/Layout'

const Home = () => {

  return (
    <Layout>
   <MainDiv>
    <Carousel/>
   </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
