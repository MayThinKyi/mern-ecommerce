import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// or only core styles
import '@splidejs/react-splide/css/core';
import heroImg1 from '../../images/logo1.png'
import heroImg2 from '../../images/logo2.png'
import heroImg3 from '../../images/logo3.png'
import heroImg4 from '../../images/logo4.png'
import DarkButton from '../ui/DarkButton';

const Hero = () => {
    const heroData=[
        {id:1,
        title:'Macbook Pro with Retina XDR Display',
        subTitle:'All new 14-inch & 15-inch',
        img:heroImg1},
        {id:2,
            title:'Future of health is on your wrist',
            subTitle:'Apple Watch Series 7',
            img:heroImg2} ,
             {id:3,
                title:'To choose your own adventure',
                subTitle:'Big and Bigger Wonderful',
                img:heroImg3} ,
                 {id:4,
                    title:'Experience the next generation',
                    subTitle:'We Make It Possible',
                    img:heroImg4}
    ]
  return (
    <div className='px-5 sm:px-10 lg:px-20'>
        <Splide options={{
            interval:1500,
            type:'loop',
        arrows:false,
        autoplay:true}}>
    {heroData?.map((item)=>{
        return   <SplideSlide key={item?.id}>
        <div  className='mt-[-50px] sm:mt-0 flex items-center justify-between'>
            <div className='w-[50%] lg:w-[50%] flex flex-col gap-y-5'>
                <h1 className='text-lg whitespace-nowrap sm:whitespace-wrap sm:text-xl md:text-2xl'>{item?.subTitle}</h1>
                <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-[400] tracking-wider leading-[45px] sm:leading-[55px] lg:leading-[65px] whitespace-wrap '>{item?.title}</h1>
                <DarkButton title={'SHOP NOW'} link={'/shop'} />
            </div>
            <img className='w-[50%] lg:w-[50%] h-[400px] object-contain' src={item?.img} alt={item?.title} />
        </div>
         </SplideSlide>

    })}
  
        </Splide>
    </div>
  )
}

export default Hero
