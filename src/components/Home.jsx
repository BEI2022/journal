import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ entries }) => {
  return (
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => (
        <p key= {index}>
          <Link to={`entry/${index}`}>{entry.content}</Link>
        </p>
      ))}
    </>
  )
}

export default Home
