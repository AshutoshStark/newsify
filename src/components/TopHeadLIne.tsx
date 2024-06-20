import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../components/Redux/hooks/hooks';
import { image } from '../components/Redux/slice/ImageCall';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import { Link } from 'react-router-dom';

const TopHeadLIne = () => {

  const {width} = useWindowDimensions();
  const Diapatch = useAppDispatch();
  const data = useAppSelector(state=>state.ImageCall.data)
  const [filter, setfilter] = useState<any>(['general','in'])

  const updateItemAtIndex = (index: number, newValue: string) => {
    setfilter((prevItems: any) => {
      const updatedItems = [...prevItems];
      if (index >= 0 && index < updatedItems.length) {
        updatedItems[index] =   newValue ;
      }
      return updatedItems;
    });
  };

  useEffect(()=>{
    Diapatch(image(filter))
  },[filter])

  return (
    <MainDiv>
      <FiltersHead>
        TOP HEADLINES
        <select name="subject" id="" onChange={(e:any)=>updateItemAtIndex(1,e.target.value)}>
        <option value="" hidden>Country</option>
        <option value={"in"}>
        {"India"}
        </option>
        <option value={"us"}>
        {"USA"}
        </option>
        <option value={"au"}>
        {"Australia"}
        </option>
        <option value={"ru"}>
        {"Russia"}
        </option>
        <option value={"fr"}>
        {"France"}
        </option>
        <option value={"gb"}>
        {"United Kingdom	"}
        </option>
    </select>
        <select name="subject" id="" onChange={(e:any)=>updateItemAtIndex(0,e.target.value)}>
        <option value="" hidden>Category</option>
        <option value={"business"}>
        {"business"}
        </option>
        <option value={"entertainment"}>
        {"entertainment"}
        </option>
        <option value={"general"}>
        {"general"}
        </option>
        <option value={"health"}>
        {"health"}
        </option>
        <option value={"science"}>
        {"science"}
        </option>
        <option value={"sports"}>
        {"sports"}
        </option>
        <option value={"technology"}>
        {"technology"}
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
                {data?.data?.articles?.map((item:any,index:any)=>(
                  <SwiperSlide key={index}>
                    <Link to={`/readingArea/${index}/${filter[0]}/${filter[1]}`}>
                  <Container>
                    <div className="card-content">
                    <img src={item.urlToImage} alt="" />
                    <div className="details">
                    </div>
                    <p className="card-title">{item.title}</p>
                    {width! > 900 &&<p className="card-para">- {item.author}</p>}
                  </div>
                  </Container>
                    </Link>
                </SwiperSlide>
                ))}
              </Swiper>
    </MainDiv>
  )
}

export const FiltersHead = styled.div`
color: #f5f5f5;
font-size: 3rem;
display: flex;
gap: 1rem;
align-items: center;
margin: 1rem;
@media screen and (max-width: 900px) {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}
select{
    color: #faf9f9;
    width: 20vw;
    border-radius: 50px;
    background: rgba( 85,226,2, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 85,226,2, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 1rem;
    margin: 1rem;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px) {
      width: 25vw;
      font-size: 10px;
      padding: 10px;
      margin: 0;
    }
}
option{
    width: 20vw;
    border-radius: 50px;
    background: rgba( 85,226,2, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 85,226,2, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    padding: 1rem;
    margin: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
    @media screen and (max-width: 900px) {
      width: 25vw;
      font-size: 10px;
      padding: 10px;
    }
}
`

export const MainDiv = styled.div`
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
p{
  font-size: 1rem;
}
  .heading{
    font-size: 1.5rem;
    margin: 0 0 1rem 1rem;
  }
  .swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper{
    width: 95vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px) {
      width: 90vw;
      height: 132px;
    }
  }
  a{
    text-decoration: none;
    color: #f5f5f5;
  }


`
export const Container = styled.div`
  margin: 1rem 2.5rem;
  img{
    width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    @media screen and (max-width: 900px) {
      width: 35vw;
      height: 100px;
    }
  }
  .card-content{
    display: flex;
    flex-direction: column;
  }
  .details{
    background: rgba( 59, 63, 100, 0.7 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 15px;
    clip-path: polygon(50% 60%, 100% 38%, 100% 99%, 0 100%, 0% 38%);
    position: absolute;
    width: 300.5px;
    height: 300px;
    bottom: 0px;
    @media screen and (max-width: 900px) {
      width: 35.5vw;
      height: 150px;
    }
  }
  .card-title{
    width: 290px;
    position: relative;
    bottom: 25px;
    margin: .5rem;
    @media screen and (max-width: 900px) {
      width: 35vw;
      height: 5vh;
      margin: 0rem 0rem;
      padding: 2px;
      font-size: 10px;
      font-weight: 400;
      overflow: hidden;
      z-index: 3;
      }
      }
      .card-para{
        width: 340px;
        position: absolute;
        bottom: 0;
        margin: .5rem;
  }
`

export default TopHeadLIne
