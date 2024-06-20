import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Author, Content, Description, Head, ImageUrl, MainDiv, Publish, Title } from './Reading';
import axios from 'axios';
import { News_API } from '../components/constants/constants';

const ReadingMedia = () => {

  const page = useParams().page
  const src = useParams().src
  let index:number = Number(page)
  const [data,setData] = useState<any>()
 
  const getMeida=async(src:any)=>{
    return axios.get(`${News_API}/everything/bbc-news.json`).then((response)=>{
      setData(response.data?.articles[index])
    })
  }

  useEffect(()=>{
    getMeida(src)
  },[])
  
  let date:Date = new Date(data?.publishedAt);

  console.log(data)

  return (
    <Layout>
      <MainDiv>
        <Head>
          <Author>
            {data?.source?.name}
          </Author>
          <Publish>
            Published at - {date.toLocaleString( `en-US` ,{
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })}
          </Publish>
        </Head>
        <Title>
          {data?.title}
        </Title>
        <ImageUrl>
          <img src={data?.urlToImage} alt="image" />
        </ImageUrl>
        <Description>
          <dd>
          Description - 
          </dd>
          <p>
          {data?.description}
          </p>
        </Description>
        <Content>
          <p>
          {data?.content}
          </p>
          <Link to={data?.url}>
            read more... 
            <p>
              (note:- this will redirect you to the source page)
            </p>
          </Link>
        </Content>
      </MainDiv>
    </Layout>
  )
}

export default ReadingMedia
