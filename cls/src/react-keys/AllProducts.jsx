import React from 'react'

const AllProducts = () => {
    const products = [
        {id: 'p1', name:'t-shirt'},
        {id: 'p2', name: 'jeans'}
    ]
  return (
    <div>
      <ul>
        {products.map(prdt => (
            <li 
            style={{background: 'red', color:'white', padding: '10px', margin:'10px'}}
            key={prdt.id}>
                {prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AllProducts
