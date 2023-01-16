import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const NewEntry = ({ addEntry }) => {
  const { category } = useParams()
  const [entry, setEntry] = useState('')


  function submit(evt) {
    evt.preventDefault()
    addEntry(category, entry)
  }

  return (
    <>
      <h2>New Entry in {category} category</h2>
      <form onSubmit={submit} className="container">
        <div>
          <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control"></textarea>
        </div>
        {/* <dropdown>
          <options>categories</options>
        </dropdown> */}
        <button className="btn btn-primary mt-2">Create Entry</button>
      </form>
    </>
  )
}

export default NewEntry