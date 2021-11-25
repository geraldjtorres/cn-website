import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination, Autoplay, Breakpoints } from 'swiper'

// install Swiper modules
SwiperCore.use([FreeMode, Pagination, Autoplay, Breakpoints])

export default function Carousel({ projects }) {
  return (
    <>
      <Swiper
        breakpoints={{
          768: {
            // width: 768,
            slidesPerView: 5
          }
        }}
        slidesPerView={2}
        freeMode={{
          enabled: true,
          // minimumVelocity: 0.5
          // momentumBounceRatio: 5,
          momentumVelocityRatio: 0.5,
          momentumRatio: 0.5
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: true
        }}
        speed={10000}
        pagination={false}
        className='mySwiper'
      >
        {projects.map(project => (
          <SwiperSlide className='box' key={project.id}>
            <Image
              src={project.image.url}
              layout='fill'
              objectFit='contain'
              alt={project.image_description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
