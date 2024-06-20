import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../components/Redux/hooks/hooks';
import { image } from '../components/Redux/slice/ImageCall';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';

const Reading = () => {

  const page = useParams().page
  const cat = useParams().cat
  const con = useParams().con
  let index:number = Number(page)
  let filter:any[] = [cat,con]
  const Dispatch = useAppDispatch();
  const data = useAppSelector(state=>state.ImageCall?.data?.data?.articles[index])
  
  useEffect(()=>{
    Dispatch(image(filter))
  },[data])
  
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

export const MainDiv = styled.div`

`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5f5;
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  @media screen and (max-width: 900px){
    font-size: 2rem;
  }
`
export const Author = styled.div`
  
`
export const Publish = styled.div`
  font-size:1.2rem;
  color: #636161;
  @media screen and (max-width: 900px){
    font-size: .8rem;
    color: #636161;
  }
`
export const Title = styled.div`
  font-size: 2rem;
  color: #f5f5f5;
  padding: 1rem;
  font-weight: 500;
  border-top: solid #cfef00 5px;
  border-bottom: solid #cfef00 5px;
  @media screen and (max-width: 900px){
    border-top: solid #cfef00 3px;
    border-bottom: solid #cfef00 3px;
    font-size: 1.5rem;
  }
`
export const ImageUrl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 85vw;
    object-fit: cover;
    margin: 1rem;
    border: solid #cfef00 2px;
    border-radius: 10px;
  }
`
export const Description = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 80vw;
  font-size: 1.5rem;
  font-weight: 400;
  color: #f5f5f5;
  p{
    margin: 1rem 3rem;
    @media screen and (max-width: 900px) {
    }
  }
  @media screen and (max-width: 900px){
    font-size: 1rem;
    width: 90vw;
    margin: 0 0 0 -1rem;
  }
  `
export const Content = styled.div`
  margin: 1rem;
  padding: 1rem;
  width: 80vw;
  font-size: 1.5rem;
  font-weight: 400;
  color: #f5f5f5;
  p{
    margin: 0rem 3rem;
    @media screen and (max-width: 900px) {
      margin: 0rem 1rem;
    }
  }
  a{
    margin: 0.5rem 3rem;
    display: flex;
    text-decoration: none;
    color:#cfef00;
    p{
      color: #575757;
    }
    @media screen and (max-width: 900px){
    font-size: .8rem;
    width: 80vw;
    margin: 0.5rem 1rem;
  }
  }
  @media screen and (max-width: 900px){
    font-size: 1rem;
    width: 90vw;
  }
  
`

export default Reading
