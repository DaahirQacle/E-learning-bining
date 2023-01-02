import React from 'react'

function Test({data}) {
    const{title , desc} = data
  return (
    <div className='col-4 my-3'>
<div className="card h-100 ">
    <div className="card-title p-2">
        <h3>{title}</h3>
    </div>
    <div className="card-body  ">
        <p>{desc}</p>
    </div>
</div>
    </div>
  )
}

export default Test