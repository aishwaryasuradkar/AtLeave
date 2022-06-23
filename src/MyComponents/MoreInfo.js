//react arrow function components(rafc)
import React from 'react'

export const MoreInfo = ({Trips}) => {
  return (
    <div> 
      <h4>{Trips.title}</h4>
      <p>{Trips.desc}</p>
      <button className="btn btn-sm btn-danger">Select</button>
    </div>
      
  )
}

