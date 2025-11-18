import React from 'react'

const Items = () => {

    const fruitsItems = ['Apple', 'Banana', 'Orange']
  return (
    <div>
      <ul>
        {fruitsItems.map((fs,index)=>(
            <li
             key={index}>{fs}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
