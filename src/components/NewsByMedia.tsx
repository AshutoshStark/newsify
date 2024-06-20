import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Container, FiltersHead, MainDiv } from './TopHeadLIne';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import axios from 'axios';
import { News_API } from './constants/constants';

const NewsByMedia = () => {

  const {width} = useWindowDimensions();
  const [sourceData, setSourceData] = useState<any>()
  const [filter, setFilter] = useState<any>("bbc-news")

  const getNews=async(src:any)=>{
    return axios.get(`${News_API}/everything/${src}.json`).then((response)=>{
      setSourceData(response.data)
    })
  }

  useEffect(()=>{
    getNews(filter)
  },[filter])

  return (
    <MainDiv>
    <FiltersHead>
      COVERAGE FORM - 
      <select id="" onChange={(e:any)=>setFilter(e.target.value)}>
      <option value="" hidden>Source</option>
       <option value={"bbc-news"}>
       {"BBC News	"}
       </option>
       <option value={"cnn"}>
       {"CNN"}
       </option>
       <option value={"fox-news"}>
       {"Fox News"}
       </option>
  </select>
    </FiltersHead>
    <Swiper
            modules={[Autoplay,Navigation,Pagination]}
            slidesPerView={width! < 900 ? 2 : 4}
            spaceBetween={width! < 900 ? -10 : -50}
            className='MySwiper'
            navigation={width! < 900 ? false : true}
            >
              {sourceData?.articles?.map((item:any,index:any)=>(
                <SwiperSlide key={index}>
                  <Link to={`/readingMedia/${index}/${filter}`}>
                <Container>
                  <div className="card-content">
                  <img src={item.urlToImage} alt="" />
                  <div className="details">
                  </div>
                  <p className="card-title">{item.title}</p>
                  {width! > 900 && <p className="card-para">- {item.author}</p>}
                </div>
                </Container>
                  </Link>
              </SwiperSlide>
              ))}
            </Swiper>
  </MainDiv>
  )
}

export default NewsByMedia
