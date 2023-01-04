import React, { useEffect, useState } from 'react'
import './item.scss'
import timg from '../../image.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { addtocart } from '../../redux/cartreducer';
function Item() {
  
  
  const [quantity, setquantity] = useState(1)
  const [item, setItem] = useState([])
  const params = useParams()
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.products)
  console.log(products.tittle)

  useEffect(() => {
    const fetchdata = async() =>{
      try{
        const res = await axios.get(
          process.env.REACT_APP_API_URL + `/products/${params.id}?populate=*`,
          {
            headers:{
              Authorization:"bearer 2a0c2a858c5ff71ac168f2bc0b859adec36b0edd77b46e745f3274800b47c293a4488b80b0323e84325fc5035554d138a25bc4ec334b16e9fa07625846c5d3d5d3d5f43eace16c5e5e78c4afa8d6a150d00e93722a1bc08257d68e2028fe9949170694f7d9532aadfaaa8881c1ff601f1ceb3e5cb975be1edc7341b7da282143"
            }
          }
        )
        
        setItem(res.data.data)
        console.log(typeof item.id)
        
      } catch (err){
        console.log(err)
      }
    }
    fetchdata();
  }, [])
  const [selectimg, setselectimg] = useState()
  return (
    <div className='item'>
      <div className='left'>
        <div className='images'>
            <img
              src={process.env.REACT_APP_UPD_URL + item?.attributes?.img1?.data.attributes.url}
              alt = ""
              onClick={(e) => setselectimg(process.env.REACT_APP_UPD_URL + item?.attributes?.img1?.data.attributes.url)}
            />
            <img
              src={process.env.REACT_APP_UPD_URL + item?.attributes?.img2?.data.attributes.url}
              alt = ""
              onClick={(e) => setselectimg(process.env.REACT_APP_UPD_URL + item?.attributes?.img2?.data.attributes.url)}
            />
        </div>
        <div className='mainimage'>
            <img
              src={selectimg || process.env.REACT_APP_UPD_URL + item?.attributes?.img1?.data.attributes.url}
              alt=""
            />
        </div>
      </div>
      <div className='right'>
        <h1>{item?.attributes?.tittle}</h1>
        <div className='price'>{item?.attributes?.price}</div>
        <p>
        {item?.attributes?.Desc}
        </p>
        {/* <button onClick={() => setquantity(prevs => prevs+1)}>+</button>
        {quantity}
        <button onClick={() => setquantity(quantity===1?1:quantity-1)}>-</button> */}
        <button className='add' onClick={() =>dispatch(addtocart({
          id:item.id,
          tittle:item.attributes.tittle,
          desc:item.attributes.Desc,
          price:item.attributes.price,
          img:process.env.REACT_APP_UPD_URL + item.attributes.img1.data.attributes.url
        }))}><AddShoppingCartIcon/> Add to Cart</button>
      </div>
    </div>
  )
}

export default Item