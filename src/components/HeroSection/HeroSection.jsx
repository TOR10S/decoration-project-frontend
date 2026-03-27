import css from "./HeroSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const HeroImgs = [{number: 1, alt: "фото-1"}, {number: 2, alt: "фото-2"}, {number: 3, alt: "фото-3"}, {number: 4, alt: "фото-4"}, {number: 5, alt: "фото-5"}, {number: 6, alt: "фото-6"}]
export default function HeroSection() {
  return (
    <section class="hero-section">
      <div class="container">
        <h1 class="header-1">Заголовок</h1>
      <img src="" alt="" />
    </div>
    <div  className={css.swiperWrapper}>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
        }}
      allowTouchMove={false}
    >
      {HeroImgs.map(({number, alt}) => {
        return <SwiperSlide><div className={css.imgWrapper}><img srcSet={`/img/Hero/Hero-${number}mobile-1x.jpg 1x, /img/Hero/Hero-${number}mobile-2x.jpg 2x`} src={`/img/Hero/Hero-${number}mobile-1x.jpg`} alt={alt} className={css.swiperImg}/></div></SwiperSlide>
      })}
    </Swiper>
      </div>
    </section>
  )
}
