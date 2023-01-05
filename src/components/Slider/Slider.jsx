import React from 'react'
import './Slider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'

// import swiper css
 import 'swiper/css'
 import 'swiper/css/pagination'
 import 'swiper/css/navigation'

import {SliderProducts} from '../../data/products'

function Slider() {
  return (
    <div className='s-container'>
      <Swiper
        className="mySwiper"
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((item, index) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{item.name}</span>
                <span>{item.detail}</span>
              </div>

              <span>{item.price}$</span>
              <div>Shop now</div>
            </div>
            <img className='img-p' src={item.img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider