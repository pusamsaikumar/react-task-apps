import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function Sample() {
    
    const {register,handleSubmit,formState:{errors},reset} = useForm(
        {
            mode:'onSubmit'
        }
    );
    const onSubmit = (data) =>{
       console.log(data);
        fetch('https://jsonplaceholder.typicode.com/users/',{
           method:'POST',
           body:JSON.stringify(data),
           headers:{
               'content-type':'application/json',
               Access :'application/json',
               Authorization:'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
           }
        }).then(response => response.json).then(json => console.log(json))
        reset();
    }
      
      return (
        <div>
        <h4>Fetch Api Data</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form- group mt-4 mb-3'>
                <label className='form-label'>Name</label>
                 <input className='form-control' type='text' placeholder='enter name' {...register('name',{
                    required:{
                        value:true, message:'This name field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.name?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Email</label>
                <input className='form-control' type='email' placeholder='enter email' {...register('email',{
                    required:{
                        value:true, message:'This email field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.email?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>City</label>
                <input className='form-control' type='text' placeholder='enter city' {...register('city',{
                    required:{
                        value:true, message:'This city field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.city?.message}</smalll>
            </div>
            <div className='form-group mb-3' >
                <label className='form-label'>Address</label>
                <textarea className='form-control' type='text' placeholder='enter address1' {...register('address1',{
                    required:{
                        value:true, message:'This name field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.address1?.message}</smalll>
            </div>
            <div className='form-group mb-3'>
                <label className='form-label'>Phone</label>
                <input className='form-control' type='number' placeholder='enter phone' {...register('phone',{
                    required:{
                        value:true, message:'This phone field is a required'
                    }
                 })} />
                 <smalll className="form-text text-danger" >{errors.phone?.message}</smalll>
            </div>
            <input type = 'submit' value='Submit' className='form-control btn btn-info '/> 
           
        </form>
    </div>
      );
}

export default Sample;