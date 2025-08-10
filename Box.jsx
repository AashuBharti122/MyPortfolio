import React from 'react'
import './Box.css'

function Box({title,image}) {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <div className="hoverbox">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Box
