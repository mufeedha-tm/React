import React from 'react'

const Person = () => {

    const person_data ={
        name:'Ajay',
        age:20,
        isStudent:'yes'
    }
  return (
    <div>
      <table border='1' cellPadding='10' cellSpacing='10'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>isStudent</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{person_data.name}</td>
                <td>{person_data.age}</td>
                <td>{person_data.isStudent}</td>


            </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Person
