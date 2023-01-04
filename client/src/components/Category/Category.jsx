import React from 'react'
import './category.scss'
import timg from '../../image.jpg'
import { Link, useParams } from 'react-router-dom'


function Category(items) {
 
  return (
    <div className='category'>
    <Link className='link' to={`/product/${items.items.id}`} >
        <div className='wrapper'>
        <div className='image'>
        <img src={process.env.REACT_APP_UPD_URL + items.items.attributes.img.data.attributes.url} alt ="temp"/>
        <div className='tittle'>
            {items.items.attributes.tittle}
        </div>
          </div>
        
        </div>
        </Link>
    </div>
  )
}

export default Category