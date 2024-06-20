import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './Redux/hooks/hooks'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Layout from './Layout/Layout';
import TopHeadLIne from './TopHeadLIne';
import NewsByMedia from './NewsByMedia';
import { imageBanner } from './Redux/slice/ImageCallBan';

const Carousel = () => {

  const Diapatch = useAppDispatch();
  const data = useAppSelector(state=>state.ImageCall.data)

  useEffect(()=>{
    Diapatch(imageBanner(["general","in"]))
  },[])

  return (
    <Layout>
      <MainDiv>
        <div className="IntroBox">
          <div className="heading">
            NEWSIFY
          </div>
          <div className="title">
            A place to get update you form the current world
          </div>
          <div className="description">
            This is an open source News Web app for the people who want update them form the news form the different places form different Sources like CNN, BBC Etc...<Button>
            </Button>
          </div>
        </div>
        <div className="ImageBox">
            <div className="image">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.data?.articles?.map((item:any,index:any)=>(    
            <SwiperSlide>
              <div className="images">
                <img src={item.urlToImage} alt="can't load image" />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
            </div>
          <div className="title"></div>
          <div className="description"></div>
        </div>
        <HeadLine>
          <TopHeadLIne/>
          <NewsByMedia/>
        </HeadLine>
      </MainDiv>
    </Layout>
  )
}

const HeadLine=styled.div`
position: relative;
bottom: -75vh;
`

const Button = styled.div`
position: relative;
margin: 4rem 0 0 0rem;
  a {
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica,"sans-serif";
  transition: all .2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: #cfef00;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  text-decoration: none;
  color: #070807db;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    font-size: 0.7rem;
    width: 15vw;
  }
}

a:hover {
  background: #c4e201;
}

a:active {
  transform: scale(0.95);
}


`

const MainDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
.IntroBox{
width: 60vw;
height: 70vh;
background: linear-gradient(to left, #00000011 1%,#000000ea 45%);
position: absolute;
.heading{
  font-size: 5rem;
  font-weight: 500;
  color: #b9e202;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 3rem;
    height: 10vh;
  }
}
.title{
  color: #b9e202;
  font-size: 1.5rem;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}
.description{
  color: #f5f5f5;
  margin: 1rem;
}
}
.ImageBox{
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  .image{
    width: 100vw;
    height: 70vh;
    @media screen and (max-width: 900px) {
      height: 60vh;
    }
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 40vw;
  height: 70vh;
  object-fit: cover;
  margin: 0 0 0 30rem;
  @media screen and (max-width: 900px) {
    margin: 0 0 0 0rem;
    width: 100vw;
    height: 100vh;
  }
}

 }
}
`
export default Carousel
