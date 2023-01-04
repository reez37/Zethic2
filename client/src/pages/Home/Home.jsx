import React, { useEffect, useState } from 'react'
import './home.scss'
import axios from 'axios'
import Category from '../../components/Category/Category'
import Productset from '../../components/Productset/Productset'

function Home() {

  const [cat, setcat] = useState([])
  
  useEffect(() => {
    const fetchdata = async() =>{
      try{
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/categories?populate=*",
          {
            headers:{
              Authorization:"bearer 2a0c2a858c5ff71ac168f2bc0b859adec36b0edd77b46e745f3274800b47c293a4488b80b0323e84325fc5035554d138a25bc4ec334b16e9fa07625846c5d3d5d3d5f43eace16c5e5e78c4afa8d6a150d00e93722a1bc08257d68e2028fe9949170694f7d9532aadfaaa8881c1ff601f1ceb3e5cb975be1edc7341b7da282143"
            }
          }
        )
        
        setcat(res.data.data)
      console.log(res.data)

        
      } catch (err){
        console.log(err)
      }
    }
    fetchdata();
  }, [])
  
  


  return (
    <div>
    <div className='home'>
    <div className='headingcat'>
      <div>All Category</div>
    </div>
    <div className='category'>
      {cat.map((cats,index) =>{
        return <Category
        key = {index}
        items = {cats}
        />
      })}
    </div>
    
    </div>
     <div className='productsets'>
    {cat.map((cats,index) =>{
      return <Productset
      key={index}
      items = {cats}
      />
    })}
    </div> 
    
    </div>
     )
}

export default Home