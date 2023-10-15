import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';
const AddReviewSection = ({productId}) => {
  const user=useSelector((state)=>state.user.user);
    const [review,setReview]=useState({
        rating:0,
        comment:''
    })
     const reviewHandler=(e)=>{
        setReview({...review,[e.target.id]:e.target.value})
     }
     const submitReviewHandler=(e)=>{
      e.preventDefault()
       axios.post(`${process.env.REACT_APP_MERN_ECOMMERCE_URL}/api/products/addReview`,{
        productId,userId:user.id,name:user.name,rating:Number(review.rating),comment:review.comment
       }
       ).then((res)=>{
        console.log(res.data)
        toast.success('Review submitted successfully!')
        window.location.reload()
        setReview({
          rating:0,comment:''
        })

       })
       .catch(err=>console.log(err))
     }
  return (
    <div className='py-10 mx-auto  md:w-[60%]'>
      <div>
        <h1 className='mb-3 text-xl font-semibold'>Write A Review</h1>
        <form onSubmit={submitReviewHandler}>
        <select id='rating' value={review?.rating} onChange={reviewHandler} className='outline-none border rounded-lg py-[4px] px-4 font-[500]'>
            <option value={0}>Rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
        </select>
        <h1 className='mt-8 mb-3 text-xl font-semibold'>Comment</h1>
        <textarea id='comment'  value={review?.comment} onChange={reviewHandler}  rows={4} placeholder='Feedback' className='w-[100%] p-4 border outline-none' required></textarea>
        <div className="my-5 text-end">
        <button type='submit' className='px-5 py-[6px] text-sm text-white transition-all duration-150 ease-in border bg-slate-800 hover:bg-white hover:text-black hover:border-black'>Submit Review</button>
        </div> 
        </form>
   
    </div>
    </div>
  )
}

export default AddReviewSection
