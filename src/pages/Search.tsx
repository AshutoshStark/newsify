import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Search_API } from '../components/constants/constants';

const Search = () => {

  const [query,setQurey] = useState<any>();
  const [data,setData] = useState<any>();

  const getResponse =async()=>{
    return axios.get(`${Search_API}/search.json?engine=google&q=Coffee&api_key%3D=${process.env.REACT_APP_NEWS_API_KEY}`).then((response)=>{
      setData(response.data)
    })
  }

  useEffect(()=>{
    getResponse();
  },[query])

  console.log(data)

  return (
   <MainDiv>
    <SearchBox>

    </SearchBox>
    <Responses>

    </Responses>
   </MainDiv>
  )
}

const MainDiv = styled.div`

`
const SearchBox = styled.div`
  
`
const Responses = styled.div`
  
`

export default Search
