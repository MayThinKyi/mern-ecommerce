import React from 'react'
import f1 from '../../images/featured1.png'
import f2 from '../../images/featured2.png'
import f3 from '../../images/featured3.png'

const FeaturedSection = () => {
    const featuredData=[
        {
            id:1,
            title:'Choose the fully immersive',
            img:f1,
            bg:'#EEE7E5'
        },
        {
            id:2,
            title:'Next gen of ipad & ipad air',
            img:f2,
            bg:'#C4CDDA'
        },
        {
            id:3,
            title:'Stream live tv & media',
            img:f3,
            bg:'#E4E4E4'
        },
    ]
  return (
    <div className='grid grid-cols-1 gap-10 px-5 my-10 sm:px-10 lg:px-20 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10'>
      {featuredData?.map((item)=>{
        return <div key={item.id} className={`p-3 text-white flex  items-center `} style={{background:item.bg}}>
            <h1 className='text-2xl font-semibold sm:text-3xl'>{item.title}</h1>
            <img src={item.img} className='h-[200px]  w-auto hover:scale-125 transition-all duration-200 ease-in  object-contain' alt={item.title} />
        </div>
      })}
    </div>
  )
}

export default FeaturedSection
