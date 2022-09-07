import React , {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { Cursor } from 'react-bootstrap-icons'
import Rating from './Rating'

function Filters() {
    const [rate,setRate] = useState(0)
  return (
    <div className='filter'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check 
            inline
             label='Ascending'
             type='radio'
             name="group1"
             id={`inline-1`}
            
            />
        </span>
        <span>
            <Form.Check 
            inline
             label='Decending'
             type='radio'
             name="group2"
             id={`inline-2`}
            
            />
        </span>
        <span>
            <Form.Check 
            inline
             label='Include out of stock'
             type='checkbox'
             name="group3"
             id={`inline-3`}
            
            />
        </span>
        <span>
            <Form.Check 
            inline
             label='fast Delivery only'
             type='checkbox'
             name="group4"
             id={`inline-4`}
            
            />
        </span>
        <span>
            <label>Rating:</label>
            <Rating  rate={rate} style={{Cursor:'pointer'}} onClick={(i)=>setRate(i + 1)} />
        </span>
        <Button variant='light'>Clear Filter</Button>
    </div>
  )
}

export default Filters