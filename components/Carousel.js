import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination, Autoplay } from 'swiper'

// install Swiper modules
SwiperCore.use([FreeMode, Pagination, Autoplay])

// const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6']
const slides = [
  { name: 'slide1', size: '480x300' },
  { name: 'slide2', size: '374x374' },
  { name: 'slide3', size: '251x377' },
  { name: 'slide4', size: '480x300' },
  { name: 'slide5', size: '480x300' }
]

export default function Carousel({ projects }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
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
        speed={11000}
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
