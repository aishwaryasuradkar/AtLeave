import React from 'react'

export const MoreInfo = ({trip}) => {
  return (
    <div> 
      <h4>{trip['title']}</h4>
      <p>{trip['desc']}</p>
      <button className="btn btn-sm btn-danger">Select</button>
    </div>
  )
}

