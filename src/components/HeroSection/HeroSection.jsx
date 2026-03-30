import css from "./HeroSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
const HeroImgs = [{number: 1, alt: "фото-1"}, {number: 2, alt: "фото-2"}, {number: 3, alt: "фото-3"}, {number: 4, alt: "фото-4"}, {number: 5, alt: "фото-5"}, {number: 6, alt: "фото-6"}]
const DoubleHeroImg = [...HeroImgs, ...HeroImgs]
export default function HeroSection() {
  return (
    <section class="hero-section">
      <div class="container">
        <h1 class="header-1">Заголовок</h1>
      <img src="" alt="" />
    </div>
    <div  className={css.swiperWrapper}>
      <Swiper
  modules={[Autoplay, EffectCoverflow]}
  effect={'coverflow'}
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  slidesPerView={1} 
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,     
    modifier: 1,
    slideShadows: false,
  }}
  breakpoints={{
    1158: {
      slidesPerView: 5, 
      spaceBetween: 20, 
      
    },
  }}
  allowTouchMove={false}
  className={css.mySwiper}
>
      {DoubleHeroImg.map(({number, alt}) => (
         <SwiperSlide><div className={css.imgWrapper}>
          <picture>
            <source media="(min-width: 768px) and (max-width: 1157px)" srcSet={`/img/Hero/Hero-${number}tablet-1x.jpg 1x, /img/Hero/Hero-${number}tablet-2x.jpg 2x`}/>
            <img srcSet={`/img/Hero/Hero-${number}mobile-1x.jpg 1x, /img/Hero/Hero-${number}mobile-2x.jpg 2x`} src={`/img/Hero/Hero-${number}mobile-1x.jpg`} alt={alt} className={css.swiperImg}/>
          </picture>
          </div></SwiperSlide>
      ))}
    </Swiper>
      </div>
    </section>
  )
}
