import React, { useState } from "react";

import cert1 from '../pictures/certificates/cert1.png';
import cert2 from '../pictures/certificates/cert2.png';
import cert3 from '../pictures/certificates/cert3.png';
import cert4 from '../pictures/certificates/cert4.png';
import cert5 from '../pictures/certificates/cert5.png';
import cert6 from '../pictures/certificates/cert6.png';
import cert7 from '../pictures/certificates/cert7.png';
import cert8 from '../pictures/certificates/cert8.png';
import cert9 from '../pictures/certificates/cert9.png';
import cert10 from '../pictures/certificates/cert10.png';

import techcert1 from '../pictures/certificates/tech-cert1.png';

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

SwiperCore.use([Pagination, EffectCoverflow]);

export default function Certificates() {
    const [IoT, setIoT] = useState(true);
    const [other, setOther] = useState(false);

    const IoTSwitch = () => {
        setOther(false);
        setIoT(true);
    }

    const otherSwitch = () => {
        setOther(true);
        setIoT(false);
    }
    return (
        <div className="certificate section" id="certificates">
            <h2 className="section-title">Certificates</h2>
            <span className="section-subtitle">Online Courses</span>
            <div className="certificate-tabs">
                <div className="toggle-button button-flex" onClick={IoTSwitch}>
                    <i className="uil uil-cube toggle-icon"></i> Blockchain Courses
                </div>
                <div className="toggle-button button-flex" onClick={otherSwitch}>
                    <i className="uil uil-file-check-alt toggle-icon"></i> Other Courses
                </div>
            </div>
            {IoT ? 
                <Swiper
            grabCursor="true"
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
                rotate: 5,
                stretch: 20,
                depth: 75,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={{
                clickable: true, 
                type: "fraction",
            }} >
            
                <SwiperSlide> 
                    <img src={cert1} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert2} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert3} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert4} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert5} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert6} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert7} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert8} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert9} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert10} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <br/>
            </Swiper>
            : null}
            {other ? 
                <Swiper
                grabCursor="true"
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={2}
                loop={false}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 20,
                    depth: 75,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{
                    clickable: true, 
                    type: "fraction",
                }} >
                    <SwiperSlide> 
                        <img src={techcert1} alt="certificate" className="certificate-img"/>
                    </SwiperSlide>
                </Swiper>
            : null}
        </div>

    )
}

