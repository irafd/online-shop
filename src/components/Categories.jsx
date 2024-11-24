import React from 'react'

const Categories = ({chooseCategory}) => {
    const categories = [
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'bracelets',
            name: 'Браслети'
        },
        {
            key: 'coulomb',
            name: 'Підвіски'
        },
        {
            key: 'earrings',
            name: 'Сережки'
        },
        {
            key: 'ring',
            name: 'Каблучки'
        },
        {
            key: 'clock',
            name: 'Годинники'
        }
    ]
    
  
    return (
        <div className='categories'>
            {categories.map(el => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
            ))}
        
        </div>
    )
}


export default Categories

