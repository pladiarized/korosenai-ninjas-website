import React from 'react';
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider01 = props => {
    const id = props.id;
    const data = props.data
    return  (
        <section id={id} className="tf-slider slider">
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>
        </section>
    )
};

const SliderItem = props => (
    <div className="swiper-container ">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="slider-inner flex home-1">
                        <div className="slider-content">
                            <h1 className="heading">{props.item.title}</h1>
                            <p className="sub-heading">{props.item.description}</p>
                            <div className="button-slider">
                                <a href="https://discord.com/invite/JtUaRs8kqc" target="_blank" rel="noreferrer"
                                    className="sc-button btn-bordered-white style letter "><span>Join Discord</span></a>
                                <a href="https://paras.id/collection/ninjasurvivors.neartopia.near" target="_blank" rel="noreferrer"
                                    className="sc-button btn-bordered-white style file"><span>Buy NFT</span></a>
                            </div>
                        </div>
                        <div className="slider-img">
                            <div className="img-home-1"><img src={props.item.img} alt="Korosenai Ninjas" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)

export default Slider01;
