import React from 'react';
import Xyz from '../pictures/Homepage-Xyz.png';

import SwiperCore, { Pagination, EffectCube, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-cube/effect-cube.min.css';

SwiperCore.use([Autoplay, Pagination, EffectCube]);

export default function Home() {
    return (
        <div className="home section" id="home">
            <h2 className="section-title">Xyz Fiegalan</h2>
            <span className="section-subtitle">About Me</span>
            <div className="home-container container grid">
                <img src={Xyz} alt="Xyz" className="home-img"/>
            </div>
            <div className="home-swiper-container">
                <Swiper 
                    effect={'cube'} 
                    grabCursor={true} 
                    cubeEffect={{shadow: false,}} 
                    pagination={{type: "fraction",}}
                    autoplay={{
                        delay: 5000,
                        autoplay: 4000,
                        disableOnInteraction: true,
                    }} >
                    <SwiperSlide>
                        <div className="home-data">
                            <div className="home-grid-content">
                                <div  className="home-grid-header">
                                    <div>
                                        <h3 className="home-grid-title">Blockchain Developer</h3>
                                        <span className="home-grid-subtitle"> DApps & NFTs</span>
                                    </div>
                                    <i className="uil uil-monitor home-icon"></i>
                                </div>
                                <p className="home-description">                      
                                    Aspiring Blockchain & Smart Contract developer that uses Solidity to build 
                                    secure DApps such as Decentralized Exchanges <b> (DEX)</b>,
                                    Crypto-Wallets, and NFTs.<br/>
                                    Having an<b> Economics</b> background helps me to identify & exploit business 
                                    opportunities caused by market inefficiencies, and predict, to certain degree,
                                    how the market would respond and its significance to the economy.
                                </p>
                                <div className="home-info">
                                    <span className="home-info-title">08</span>
                                    <span className="home-info-name">Blockchain <br/> Certificates </span>
                                </div>
                                <div className="autoplay">
                                    <i className="uil uil-angle-left autoplay-icon"></i> Swipe to stop autoplay
                                    <i className="uil uil-angle-right autoplay-icon"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-data">
                            <div className="home-grid-content">
                                <div  className="home-grid-header">
                                    <div>
                                        <h3 className="home-grid-title">Financial Investments</h3>
                                        <span className="home-grid-subtitle"> Stocks & Cryptocurrency</span>
                                    </div>
                                    <i className="uil uil-bitcoin home-icon"></i>
                                </div>
                                <p className="home-description">                      
                                    I'm passionate about <i>financial education</i>, <i>literacy</i>, and <i>freedom</i>.
                                    Investing in stocks, has always been in my mind since college, 
                                    and in October 2020, I finally had some funds to deploy in the market. I plan to 
                                    allocate 40% to 50% of my investments to crypto, which is currently about 30%.
                                    <br/> I try to keep my Savings to Investment ratio at around 10 : 90, respectively. 
                                </p>
                                <div className="home-info">
                                    <span className="home-info-title">80</span>
                                    <span className="home-info-name">Planned Annual <br/> Return (%) </span>
                                </div>
                                <div className="autoplay">
                                    <i className="uil uil-angle-left autoplay-icon"></i> Swipe to stop autoplay
                                    <i className="uil uil-angle-right autoplay-icon"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-data">
                            <div className="home-grid-content">
                                <div  className="home-grid-header">
                                    <div>
                                        <h3 className="home-grid-title">Physical Activity</h3>
                                        <span className="home-grid-subtitle"> Bodybuilding & Sports</span>
                                    </div>
                                    <i className="uil uil-dumbbell home-icon"></i>
                                </div>
                                <p className="home-description">                      
                                I spend most of the time on my Laptop learning how to code,
                                    but I do workout and I'm quite well-versed in the science of<i> Bodybuilding</i>.
                                    I love Basketball, my skills are average but I always daydream that I'm an
                                    NBA All-Star player. I love playing the game especially with family and friends.
                                    <br/>
                                    My all-time favorite player is:
                                </p>
                                <div className="home-info">
                                    <span className="home-info-title">24</span>
                                    <span className="home-info-name">Kobe <br/> Bryant </span>
                                </div>
                                <div className="autoplay">
                                    <i className="uil uil-angle-left autoplay-icon"></i> Swipe to stop autoplay
                                    <i className="uil uil-angle-right autoplay-icon"></i>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-data">
                            <div className="home-grid-content">
                                <div  className="home-grid-header">
                                    <div>
                                        <h3 className="home-grid-title">Music</h3>
                                        <span className="home-grid-subtitle">Vocals & Instruments</span>
                                    </div>
                                    <i className="uil uil-music home-icon"></i>
                                </div>
                                <p className="home-description">                      
                                    Born in a family of musicians, I quickly adapted to music and loved everything about it.
                                    I play the piano, guitar and some drums. I am better of playing by ear than reading notes. <br/>
                                    I started playing the piano when I was 5 years old. My Mom, a superb pianist was my one and only teacher.
                                    The lessons were strict and I was forced to practice for at least 2 hours a day. I started to hate 
                                    playing the piano, and in Highschool I started to learn the guitar by myself. <br/>
                                    Today, I love and play both piano and guitar and music has always been a big part of my life.
                                </p>
                                <div className="autoplay">
                                    <i className="uil uil-angle-left autoplay-icon"></i> Swipe to stop autoplay
                                    <i className="uil uil-angle-right autoplay-icon"></i>
                                </div>                  
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="home-container container grid">
                <div className="home-social">
                    <a href="https://www.linkedin.com/in/xyz-fiegalan-253592136/" className="home-social-icon">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/CryptoPH-Xyz" className="home-social-icon">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/xyz_rf/" className="home-social-icon">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/XyzFiegalan" className="home-social-icon">
                        <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/XyzFiegs" className="home-social-icon">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div> 
        </div>
    )
}
