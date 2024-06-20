import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Layout = ({children} : {children:React.ReactNode}) => {
  return (
    <Container>
        <Navbar/>
        {children}
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: sticky;

`
export default Layout
