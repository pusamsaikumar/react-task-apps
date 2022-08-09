import axios from 'axios';
import React, {useState} from 'react';
import {useForm, Contoller} from 'react-hook-form';

import Data from '../data.json';

import { promises as fs } from 'fs';
import { pathToFileURL } from 'url';
import { parse } from 'path';
import { PassThrough } from 'stream';
import path from 'path-browserify';



function ReactFetch() {
    const {register,handleSubmit,formState:{errors},reset} = useForm();

  



//const [data,setData] = useState(Data);

     const onSubmit = (data) =>{
        console.log(JSON.stringify(data));
        reset();
 
         TextInput([data]);
    
     }
    // const TextInput=async(data)=>{


      
  

    // //   await  fs.writeFile('./data.json',data,(err)=>{
    // //         if(err) {
    // //          console.log('something went wrong in this file: ',err)
    // //         } else{
    // //          console.log('done')

    // //         }
    // //      })

    // }

    // const data = fs.readFileSync("db.json", "utf8");
    // const db = JSON.parse(data);
    
    // console.log(db);
    

    const TextInput = (jsonData) => {
        const element = document.createElement('a');
        const textFile = new Blob([JSON.stringify(jsonData)],{type:'text/plain'});
        element.href = URL.createObjectURL(textFile);
     
        element.download = 'Myfile.json';
       document.body.appendChild(element);
        element.click();

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
  )
}

export default ReactFetch;