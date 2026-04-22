import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import css from './PhotoModal.module.css';

export default function PhotoModal({ item, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
            <svg width="24" height="24"><use href="/img/icons.svg#icon-clear"></use></svg>
        </button>
        
        <div className={css.content}>
          <h2 className={css.title}>{item.theme}</h2>
          
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation pagination={{ clickable: true }} keyboard={true}
            className={css.mySwiper}
          >
            {item.images?.map((img, index) => (
              <SwiperSlide key={img._id || index}>
                <img 
                  src={img.url.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')} 
                  alt={item.theme} className={css.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className={css.info}>
            {item.review ? (
              <p><strong>Відгук:</strong> {item.review}</p>
            ) : (
              <p><strong>Кольори:</strong> {item.colors}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}