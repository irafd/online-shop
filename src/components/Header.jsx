import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.priceTotal));
  return (<div>
    {props.orders.map(el => (
      <Order   decrease={props.decrease } increase={props.increase} onDelete={props.onDelete} key={el.id} item={el}  />
    ))}
    <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}$</p>
    
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Додай товар у кошик</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
      <header>
          <div>
              <span className='logo'>Магазин ювелірних виробів</span>
              <ul className='nav'>
              <li>Про нас</li>
              <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
          </div>
          
      {cartOpen && (
        <div className='shop-cart'>
          {props.orders.length > 0 ?
showOrders(props) : showNothing()}
          </div>
      )}
      <div className='presentation'></div>
    </ header>
  )
}
