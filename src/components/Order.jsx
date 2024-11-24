import React from 'react'
import { FaTrashRestore } from "react-icons/fa";



const Order = ({item, onDelete, increase, decrease}) => {
    return (
      <div className='item'>
          <div key={item.id}>
            <img src={"./img/" + item.img} alt={item.alt}  />
            <h2>{item.title}</h2>
        <h3>{item.priceTotal}$</h3>
        <FaTrashRestore className='delete-icon' onClick={() => onDelete(item.id)} />
          
          <div className='count'>
           <button className='counts' onClick={() => increase(item.id)}>+</button>
          <p> {item.count}  </p>
            <button className='counts' onClick={() => decrease(item.id)}>-</button>   
       </div>
          </div>
        
    </div>

       
    )
  }


export default Order
