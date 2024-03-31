import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavHashLink } from "react-router-hash-link"
import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";


import 'swiper/css';
import SwiperCore from 'swiper';

import one from "./imgs/one.webp";
import two from "./imgs/two.webp";
import three from "./imgs/three.webp";
import four from "./imgs/four.webp";
import five from "./imgs/five.webp";



// Import the Swiper types
import { Swiper as SwiperType } from 'swiper';

SwiperCore.use([]);

export function Slider(){
    return(
        <Container>
            <h4>Kids App</h4>
           
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperType) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={one} alt="" className="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={two} alt="" className="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={three} alt="" className="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={four} alt="" className="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={five} alt="" className="img" />
                </SwiperSlide>
                
                
            </Swiper>
             <ScrollAnimation animateIn="fadeInLeft">

           <BrowserRouter>
            <a href="https://play.google.com/store/apps/details?id=com.protech.kidzworld&pcampaignid=web_share" className="button">Download Now</a>
          </BrowserRouter>
             </ScrollAnimation>
            
        </Container>
    );
}
