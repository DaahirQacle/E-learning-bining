import React from 'react'
import Card from 'react-bootstrap/Card'
import {NavLink} from 'react-router-dom'
function Course({item , base64String}) {
    const {category,coursesName,lecturerName,coursesPrice} = item;
  return (
    <div className='col-4 my-4 '>
      <NavLink to={`${coursesName}`} className='text-decoration-none text-dark' > 
      <Card style={{ width: '25rem' }} className="between text-decoration-none">
      <Card.Img variant="top" src={`data: image/png;base64, ${base64String}`} width='200' height='200' className='p-4'/>
      <Card.Body>
        <Card.Text>
         <h3 className="bg-success text-light rounded-pill fs-5 p-2 " style={{width:"240px"}}>{category}</h3>
         <h4 >{coursesName}</h4>
         <p>{lecturerName}</p>
       <div className='d-flex justufy-content-between '>
       <h5 className='text-success'>${coursesPrice}.00 for life time access</h5>
       </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </NavLink>
     
</div>
  )
}

export default Course