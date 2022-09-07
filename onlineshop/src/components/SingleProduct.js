import React from 'react'
import { Card } from 'react-bootstrap'

function SingleProduct({item}) {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={item.image} alt={item.name} />
         <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle>
            <span>${item.price.split('.')[0]}</span>
          </Card.Subtitle>
         </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct