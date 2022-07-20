
import React from 'react';
import {useForm,Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import* as yup from 'yup';
import NumberFormat from 'react-number-format';

 const GENDER = {
    MALE :'MALE',
   OTHERS:'OHTERS'
  }
const Schema =yup.object().shape({
    fullname:yup.string().required(),
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    intersets:yup.object().shape({
        reading:yup.boolean(),
        music:yup.boolean().required()
    }),
    creditCard:yup.string().required()
});

function CustomValidation() {

    const {register,handleSubmit,formState:{errors},control} = useForm({
         resolver:yupResolver(Schema)
      
    });
    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <div>
        <h4 style={{textAlign:'center'}}>custom validations</h4>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className='form-group'>
            <label className='form-label'>FIRST NAME</label>
            <input type='text' placeholder='Please enter first name' name='firstname'className='form-control' {...register('fisrtname')} />
            {/* <input type='text' placeholder='Please enter first name' className='form-control' {...register('fisrtname')} /> */}
            <small className='form-text text-danger'>{errors.firstname?.message}</small>

        </div>
        <div className='form-group mb-4'>
            <label className='form-label'>LAST NAME</label>
            {/* //schema validation */}
            <input type='text' placeholder='Please enter Last name' className='form-control' {...register('lastname')} />
            {/* <input type='text' placeholder='Please enter Last name' className='form-control' {...register('lastname',{required:{value:true,message:'this field lastname is required'}})} /> */}
            <small className='form-text text-danger'>{errors.lastname?.message}</small>
        </div>

        <div className='form-group mb-4'> 
            <label className='form-label mt-2'>Full Name
            <Controller control={control}
            render={
                ({field:{onBlur,onChange,value}}) =>(
                <input placeholder='Full name' className='form-control mt-2 ml-3 w-1000'
                aria-invalid={errors.fullname? "true" :"false"}
                // {...field}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                />
                )}
            name='fullname'
            // rules={{required:{value:true,message:'this fullname field is required'}}}
            />
            
            </label>
           
            <small className='form-text text-danger' style={{display:'block'}}>{errors.fullname?.message}</small>
        </div>

        <div className='row'>
        <div className='col-md-1' >
                <label>Reading </label>
                <input type='checkbox' {...register('intersets.reading')} />
         </div>
           
         <div className='col-md-1' >
                <label>Music</label>
                <input type='checkbox' {...register('intersets.music')} />
         </div>
        </div>


        <div className='form-group mb-4'> 
            <label className='form-label mt-2'>USA Number
            <Controller control={control}
            render={
                ({field:{onBlur,onChange,value}}) =>(
                <NumberFormat placeholder='Please Enter Your Credit Card Number' className='form-control mt-2 ml-3 w-1000'
                aria-invalid={errors.creditCard? "true" :"false"}
                // {...field}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                format={" (###) - (###) - (####) "}
                mask = { " _ "}
                />
                )}
            name='creditCard'
            // rules={{required:{value:true,message:'this fullname field is required'}}}
            />
            
            </label>
           
            <small className='form-text text-danger' style={{display:'block'}}>{errors.creditCard?.message}</small>
        </div>

        <div  className='form-group mt-2 mb-4'>
              <label className='form-label'>USA Contact Number</label>
             <NumberFormat type='text'name='phone' placeholder= 'please enter your 10 digit phone numbe' className="form-control" format ={ " (###) - (###) - (####) "} {...register('phone',{required:{value:true,message:'this field lastname is required'}})}/> 
             <small className='form-text text-danger'>{errors.phone?.message}</small>
            
            </div>


        <div className='form-group mb-4'>
            <input type='submit' value='Submit' className='form-control btn btn-secondary' />
        </div>
       </form>
    </div>
  )
}

export default CustomValidation;