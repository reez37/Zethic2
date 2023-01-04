import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productbox from '../Productbox/Productbox'
import './productset.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Productset(items) {
    const [product, setproduct] = useState([])
    const num = items.items.id || items.items
   
  
   
    useEffect(() => {
        const fetchdata = async() =>{
          try{
            const res = await axios.get(
              process.env.REACT_APP_API_URL + `/products?populate=*&[filters][categories][id][$eq]=${num}`,
              {
                headers:{
                  Authorization:"bearer 2a0c2a858c5ff71ac168f2bc0b859adec36b0edd77b46e745f3274800b47c293a4488b80b0323e84325fc5035554d138a25bc4ec334b16e9fa07625846c5d3d5d3d5f43eace16c5e5e78c4afa8d6a150d00e93722a1bc08257d68e2028fe9949170694f7d9532aadfaaa8881c1ff601f1ceb3e5cb975be1edc7341b7da282143"
                }
              }
            )
            
            setproduct(res.data.data)
            
          } catch (err){
            console.log(err)
          }
        }
        fetchdata();
      }, [])
      
      const tittle = items?.items?.attributes?.tittle 

  return (
    <div className='productset'>
    <div className='tittle'>
    <div>{tittle?tittle:
    <Link className='homelink' to='/'><ArrowBackIcon/>Home</Link>
    }</div>
    </div>
    <div className='wrapper'>
    
      {product.map((products,index)=>{
        return <Productbox
        item = {products}
        />
      })}
     
    </div>


    </div>
  )
}

export default Productset