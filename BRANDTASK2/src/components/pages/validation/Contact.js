
import React, { useState } from 'react';
import {useForm,Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Data from '../../../data.json';
import axios from 'axios';

import* as yup from 'yup';
import NumberFormat from 'react-number-format';


function Contact() {
    const {register,handleSubmit,formState:{errors},control} = useForm();
    const [formdata,setFormdata] = useState(Data);
     const [isLoading,setIsLoading] = useState(false);
    const onSubmit = (data) =>{
    console.log(JSON.stringify(data));
        // let res= JSON.stringify(data)
      //  let result = JSON.parse(data)
     
     
      setFormdata(data)
    }


  


  return (
    <div>
        <h3 style={{textAlign:'center'}}>Contact Details</h3>

        <h3>current state values:</h3>
         {/* <prev>{JSON.stringify(formdata)}</prev>  */}
     <p>
    
     </p>
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className='form-group mt-2 mb-4'>
              {/* <label className='form-label'>USA Contact Number</label> */}
               {/* <NumberFormat type='text'name='phone' placeholder= 'please enter your 10 digit phone numbe' className="form-control" format ={ " (###) - (###) - (####) "}  {...register('phone',{required:true})} />  
            
            <small className='form-text text-danger'>{errors.phone?.message}</small> */}

            <label className='form-label'>USA Contact Number
                <Controller name='phone' control={control}
               rules={
                {
                    required:{value:true,message:'this phone field is required'},
                    minLength:{
                        value:20,
                        message:'please enter min 10 characters'
                    },
                    maxLength:{
                        value:26,
                        message:'please enter max 10 digit number'
                    }
                  
                    // pattern:{
                    //     value:/^\d{20}$/,
                    //     message: "This input is containes 10 digit phone number only."
                    //   }
                
                }
            }
                render={({field}) => (
                    <NumberFormat
                     type='text'
                       style={{width:800,display:'block'}}
                       placeholder= 'please enter your 10 - digit number'
                       format={" (###) - (###) - (####)"}
                        mask = {" - "}
                        {...field} 
                        aria-invalid={errors.fullname? "true" :"false"}
                        
                        />

                )}
                
                />
            </label>
            <small className='form-text text-danger d-block'>{errors.phone?.message}</small>
            
         </div>


         <div className='form-group mb-4'> 
            <label className='form-label mt-2'>Full Name
            <Controller control={control}
            render={
                ({field:{onBlur,onChange,value}}) =>(
                <input placeholder='Full name' className='form-control'
                aria-invalid={errors.fullname? "true" :"false"}
                // {...field}
                style={{width:800,display:'block'}}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                />
                )}
            name='fullname'
             rules={{required:{value:true,message:'this fullname field is required'}}}
            />
            
            </label>
           
            <small className='form-text text-danger' style={{display:'block'}}>{errors.fullname?.message}</small>
        </div> 
         
        <div className='form-group mb-4'>
            <input type='submit' value='Submit' className='form-control btn btn-secondary' />
        </div>
        </form>

        <hr></hr>

        <div>
            <h3>display input data here:</h3>
        <>{
            <table className='border 2px'>
                <thead>
                    <tr>

                        <th>Phone</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formdata.phone}</td>
                        <td>{formdata.fullname}</td>
                    </tr>
                </tbody>
            </table>
        }</>
        </div>
    </div>
  )
}

export default Contact;