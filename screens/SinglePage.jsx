import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import StarRating from '../src/components/StarRating';
const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const sortUrl = item => item.slice(1, -1);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        setProduct(res)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      {product ? (
        <div className='px-4 sm:px-10'>
          <h1 className='text-center text-white font-semibold mt-10 text-xl sm:text-3xl'>
            {product.title}
          </h1>
          <div className='max-w-64 mt-10 mx-auto'>
            <img className='w-full' src={product.image} alt="" />
          </div>
          <div className='text-center flex flex-col'>
            <h1 className='font-normal mt-8 text-lg sm:text-2xl'>
              Price: {product.price} $
            </h1>
            <h1 className='font-normal mt-2 text-lg sm:text-xl'>
              Category: {product.category}
            </h1>
          </div>
          <h1 className='text-center font-normal mt-6 text-base sm:text-xl'>
            {product.description}
          </h1>
          <StarRating rating={product.rating.rate} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default SinglePage