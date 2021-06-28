import React from "react";

import photo1 from "../pictures/project1.png";
import photo2 from "../pictures/project2.png";
import photo3 from "../pictures/project3.png";
import photo4 from "../pictures/project4.png";
import photo5 from "../pictures/project5.png";

import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

export default function Projects() {
    return (
        <div className="project section" id="projects">
            <h2 className="section-title">Projects</h2>
            <span className="section-subtitle">Let's Build!</span>
            <Swiper
                grabCursor="true"
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                coverflowEffect={{
                    rotate: 25,
                    stretch: 25,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{clickable: true}} 
                autoplay={{
                    delay: 3000,
                    autoplay: 4000,
                    disableOnInteraction: true,    
                }}  >
            
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">Decentralized Exchange (DEX)</h3>
                            <div className="project-switch">
                                Details <i className="uil uil-eye switch-icon"></i>  
                            </div>
                        </div>
                    
                        <img src={photo2} alt="project" className="project-img"/>

                        <div className="project-buttons">
                            <a href="https://github.com/CryptoPH-Xyz/Building_DEX" className="button button-flex project-button">
                                Source code <i className="uil uil-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">CryptoCuties</h3>
                            <div className="project-switch">
                                Details <i className="uil uil-eye switch-icon"></i>  
                            </div>
                        </div>
                    
                        <img src={photo1} alt="project" className="project-img"/>

                        <div className="project-buttons">
                            <a href="https://github.com/CryptoPH-Xyz/Cloning-CryptoKitties" className="button button-flex project-button">
                                Source code <i className="uil uil-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">Crypto Price Tracker</h3>
                            <div className="project-switch">
                                Details <i className="uil uil-eye switch-icon"></i>  
                            </div>
                        </div>
                    
                        <img src={photo3} alt="project" className="project-img"/>

                        <div className="project-buttons">
                            <a href="https://github.com/CryptoPH-Xyz/Crypto-pricePHP-tracker" className="button button-flex project-button">
                                Source code <i className="uil uil-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">MultiSig CryptoWallet</h3>
                            <div className="project-switch">
                                Details <i className="uil uil-eye switch-icon"></i>  
                            </div>
                        </div>
                    
                        <img src={photo4} alt="project" className="project-img"/>

                        <div className="project-buttons">
                            <a href="https://github.com/CryptoPH-Xyz/MultiSigWallet-Remix" className="button button-flex project-button">
                                Source code <i className="uil uil-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">Orderbooks</h3>
                            <div className="project-switch">
                                Details <i className="uil uil-eye switch-icon"></i>  
                            </div>
                        </div>
                    
                        <img src={photo5} alt="project" className="project-img"/>

                        <div className="project-buttons">
                            <a href="https://github.com/CryptoPH-Xyz/Binance-API" className="button button-flex project-button">
                                Source code <i className="uil uil-arrow-right button-icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <br/>
            </Swiper>
        </div>

    )
}
