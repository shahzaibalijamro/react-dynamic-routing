import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../src/App.css"

const Home = () => {
  const [productArr, setProductArr] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function abc(params) {
      await axios('https://fakestoreapi.com/products')
        .then((res) => {
          console.log(res.data);
          setProductArr(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    abc();
  }, [])
  const goToSinglePage = item => {
    navigate(`/singlePage/${item.id}`);
  }
  return (
    <div>
      <h1 className="text-3xl text-center mt-10 font-bold">
        Hello React!
      </h1>
      <div className='flex justify-center mt-10 items-center flex-wrap gap-5'>
        {productArr ? productArr.map((item, index) => {
          return (
            <div key={item.id} className="card border border-white bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title h-14 line-clamp-2">{item.title}</h2>
                <p className="line-clamp-3">{item.description}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => goToSinglePage(item)} className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            // <h1>{item.title}</h1>
          )
        }) : <h1>Loading</h1>}
      </div>
    </div>
  )
}

export default Home