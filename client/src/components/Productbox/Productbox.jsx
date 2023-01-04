import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './productbox.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useDispatch} from 'react-redux'
import { addtocart } from '../../redux/cartreducer';

function Productbox(item) {
  const dispatch = useDispatch()
  return (

    <div className='productbox'>
    
        <div className='wrapper'>
        <div className='container'>
        <Link className='link' to= {`/item/${item.item.id}`}>
        <div className='image'>
        <img src={process.env.REACT_APP_UPD_URL + item.item.attributes.img1.data.attributes.url} alt ="temp"/>
        </div>
        </Link>
        <div className='tittle'>
          {item.item.attributes.tittle}
          <AddShoppingCartIcon className='addicon'  onClick={() =>dispatch(addtocart({
          id:item.item.id,
          tittle:item.item.attributes.tittle,
          desc:item.item.attributes.Desc,
          price:item.item.attributes.price,
          img:process.env.REACT_APP_UPD_URL + item.item.attributes.img1.data.attributes.url
        }))}/>
        </div>
        
        </div>
        </div>
     

    </div>
  )
}

export default Productbox