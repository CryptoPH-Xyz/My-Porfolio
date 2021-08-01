import React, { useState } from "react";

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
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);

    const showModal1 = () => {
        setModal1(true);
    }
    const hideModal1 = () => {
        setModal1(false);
    }

    const showModal2 = () => {
        setModal2(true);
    }
    const hideModal2 = () => {
        setModal2(false);
    }

    const showModal3 = () => {
        setModal3(true);
    }
    const hideModal3 = () => {
        setModal3(false);
    }

    const showModal4 = () => {
        setModal4(true);
    }
    const hideModal4 = () => {
        setModal4(false);
    }

    const showModal5 = () => {
        setModal5(true);
    }
    const hideModal5 = () => {
        setModal5(false);
    }

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
                pagination={{clickable: true}} >          
                <SwiperSlide>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">Decentralized Exchange (DEX)</h3>
                            <div className="project-switch" onClick={showModal1}>
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
                            <div className="project-switch" onClick={showModal2}>
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
                            <div className="project-switch" onClick={showModal3}>
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
                        <div className="project-header" onClick={showModal4}>
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
                            <div className="project-switch" onClick={showModal5}>
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
            {modal1 ?
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <h3 className="modal-title">Decentralized Exchange (DEX)</h3>
                            </div>
                            <i className="uil uil-times modal-close" onClick={hideModal1}></i>
                        </div>
                        <div className="modal-content">
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    A DEX with a built-in Wallet containing 2 custom built tokens
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Only owner can add and verify tokens in this DEX
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    2 ERC-20 custom tokens named "Future" and "Virtuosa"
                                    with tickers "XYZ" and "VIA", respectively
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    The tokens are stored in the wallets, and traded on the DEX.
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    The smart contracts are built and tested using Solidity & Truffle
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-times-circle ongoing-icon"></i>
                                <p className="modal-item-description">
                                    No Website or Frontend (Project status: Will add Frontend Soon) 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
            {modal2 ?
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <h3 className="modal-title">CryptoCuties</h3>
                            </div>
                            <i className="uil uil-times modal-close" onClick={hideModal2}></i>
                        </div>
                        <div className="modal-content">
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    My own version of the CryptoKitties website
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Frontend built using HTML, CSS, JS and Bootstrap
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Connects to Metamask using Web3.js
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Added Marketplace contract and set to multiple pages
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-times-circle ongoing-icon"></i>
                                <p className="modal-item-description">
                                    No Marketplace UI yet
                                    (Project status: Ongoing) 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
            {modal3 ?
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <h3 className="modal-title">Crypto Price Tracker</h3>
                            </div>
                            <i className="uil uil-times modal-close" onClick={hideModal3}></i>
                        </div>
                        <div className="modal-content">
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Webpage that fetches the top 100 tokens along with price
                                    and other details from Coingecko API
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Frontend build using Next.js and Tailwind CSS.
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    There is a search bar that filters tokens upon input
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Prices are only shown in my native currency, 
                                    the Philippine Peso (PHP)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
            {modal4 ?
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <h3 className="modal-title">Multi-Signature Crypto Wallet</h3>
                            </div>
                            <i className="uil uil-times modal-close" onClick={hideModal4}></i>
                        </div>
                        <div className="modal-content">
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    My first project on Solidity
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    A multisig wallet built for families or 
                                    groups of your most trusted people
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Hosts up to 10 users, built using the Remix IDE
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Any entity can deposit ETH into this wallet including non-owners
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Only owners can withdraw or transfer money from this wallet 
                                    to another wallet, <br/> given that majority (more than 50%) 
                                    of owners agreed (by signing) on the transaction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
            {modal5 ?
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <h3 className="modal-title">Orderbooks</h3>
                            </div>
                            <i className="uil uil-times modal-close" onClick={hideModal5}></i>
                        </div>
                        <div className="modal-content">
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    A test project given by a company I applied for after 
                                    1 month of learning how to code, LOL 
                                    <i className="uil uil-grin-tongue-wink"></i> <br/>
                                    This became the inspiration to learn more about frontend development, <br/> 
                                    and a building block to all projects displayed on my portfolio
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-times-circle ongoing-icon"></i>
                                <p className="modal-item-description">
                                    Made a lot of mistakes and didn't finish the test here, 
                                    but <b> I LEARNED A LOT</b> from this experience
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Built frontend using Next.js and Tailwind CSS
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <p className="modal-item-description">
                                    Webpage that streams into Binance websockets to filter and 
                                    display the Orderbooks of three USDT pairs: <br/>
                                    BTC/USDT, ETH/USDT, and DOGE/USDT
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-times-circle ongoing-icon"></i>
                                <p className="modal-item-description">
                                    Did not know how to use websockets and display on Orderbook,
                                    used APIs instead <br/>
                                    Websockets are used but can't be translated into Orderbooks 
                                    and Kline charts. 
                                </p>
                            </div>
                            <div className="modal-item">
                                <i className="uil uil-times-circle ongoing-icon"></i>
                                <p className="modal-item-description">
                                    Issue with Login and Logout button when using 
                                    Docker(has not been fixed yet)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
        </div>

    )
}
