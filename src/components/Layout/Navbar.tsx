import React from 'react'
import styled from 'styled-components'
import { Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const {pathname} = useLocation();

  return (
    <MainDiv>
      <Heading>
        NEWSIFY
      </Heading>
        <nav>
           <Link to={'/'} className={pathname === '/' ? "activeLink" : "notActiveLink"}>
            Home
           </Link>
           <Link to={'/search'} className={pathname.includes('album') ? "activeLink" : "notActiveLink"}>
            Search
           </Link> 
        </nav>
    </MainDiv>
  )
}

const Heading = styled.h1`
  color: #b9e202;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const MainDiv = styled.div`
height: 10vh;
width: 100vw;
display: flex;
align-items: center;
border-bottom: solid #b9e202 1px;
@media screen and (max-width: 900px) {
  overflow: hidden;
  justify-content: space-around;
  }
nav{
  width: 80vw;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    width: 60vw;
    gap: 1rem;
  }
}
a{
  text-decoration:none;
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}
.activeLink{
  color:#bee800 ;
  border-bottom: solid 2px #c5f003;
}
.notActiveLink{
  color:white;
}


`

export default Navbar
