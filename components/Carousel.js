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
        slidesPerView='auto'
        freeMode={{
          enabled: true
          // minimumVelocity: 0.5,
          // momentumBounceRatio: 5,
          // momentumVelocityRatio: 0.5,
          // momentumRatio: 0.5
        }}
        spaceBetween={20}
        // loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: true
        }}
        speed={20000}
        pagination={false}
        loop={true}
        className='mySwiper'
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <img src={project.image.url} alt={project.image_description} />

            {/* <Image
              src={project.image.url}
              layout='fill'
              objectFit='cover'
              alt={project.image_description}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
