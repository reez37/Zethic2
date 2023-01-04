import React from 'react'
import './navbar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navbar() {
  const num = useSelector(state => state.cart.products)
  const len = num.length
 
  return (
    
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div>CARTOFY</div>
        </div>
        <div className='right'>
        <Link className='link' to='/cart'>
        <div className='carticon'>
          <ShoppingCartIcon className='icon'/>
          <span className='num'>{len}</span>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar