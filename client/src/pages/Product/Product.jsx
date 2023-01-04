import React from 'react'
import './product.scss'
import { useParams } from 'react-router-dom'
import Productset from '../../components/Productset/Productset';
function Product() {
  const param = useParams();

  
 
  return (
    <div className='product'>
    <Productset items = {param.id}/>
    </div>
  )
}

export default Product