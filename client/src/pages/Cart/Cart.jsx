import React from 'react'
import './cart.scss'
import {useSelector,useDispatch} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { removefromcart, clearcart } from '../../redux/cartreducer';
import { Link } from 'react-router-dom';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


function Carts() {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  const len = products.length
  
  
  return (
    <div className='carts'>
      <h1>Products In Your Cart</h1>
      {len?(products.map(product => (
        <div className='item' key={product.id}>
          <img src={product.img}/>
          <div className='details'>
            <h1>{product.tittle}</h1>
            <p>{product.desc}</p>
            <div className='price'>Rs {product.price}</div>
          </div>
          <DeleteIcon className='icon' onClick = {() => dispatch(removefromcart(product.id))}/>
        </div>

      ))):(
        <div className='empty'>
        <div>Cart is Empty</div>
        <Link className='link' to='/'><button>GO TO HOME</button></Link>
        </div>
      )}
      <div className='btns'>
      <button>PROCEED TO CHECKOUT</button>
      <button className='reset' onClick = {() => dispatch(clearcart())}>
      <RemoveShoppingCartIcon/>
      <div>RESET CART</div>
      </button>
      </div>
    </div>
  )
}

export default Carts