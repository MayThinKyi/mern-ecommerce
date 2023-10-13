import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";

const Reviews = ({product}) => {
    const [reviews,setReviews]=useState(null);
    useEffect(()=>{
        setReviews(product?.reviews)
    },[product])
    
  return (
    <div className='py-10 mx-auto border-t'>
        <div className="text-center ">
        <h1 className='text-xl font-semibold'>Customer Reviews</h1>
        <div className='md:w-[60%] mx-auto'>
        {reviews?.length<1  ? <p>No reviews yet.</p> :
            reviews?.map((item,key)=>{
            return <div key={key} className='py-5 border-b text-start'>
                <ReactStars
                edit={false}
                value={item?.rating}
                count={6}
                size={24}
                
                activeColor="#ffd700"
                />
                <p className='text-[15px] text-zinc-600'>{item?.comment}</p>
                <p className='font-[500]'>{item?.name}</p>
            </div>
        })
        }
        </div>
        </div>
    </div>
  )
}

export default Reviews
