import React from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = ({ categories }) => {
  return (
    <>
      <h2>Please select a category:</h2>
      <ul>  
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/categories/${cat.name}/entries/new`}>{cat.name}</Link>
          </li>          
        ))}
      </ul>
    </>
  )
}

export default CategorySelection