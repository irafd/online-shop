import React from 'react'

function Item ({onAdd, item, onShowItem})  {
    return (
        <div className='item'>
            <img src={"./img/" + item.img} alt="items"
          width={20} height={300}
          onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
        <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
      </div>
    )
  }


export default Item
