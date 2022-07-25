import React from 'react';

import {useForm} from 'react-hook-form';
import  {className} from 'classnames';
import NumberFormat from 'react-number-format';




// function SignUp() {
//   //const [userinfo,setUserinfo] = useState();
//   const {register,handleSubmit,errors} = useForm();
//   const onSubmit=(data)=>{
//     // setUserinfo(data);
//      console.log(JSON.stringify(data))
//   }
//   return (
//     <div className='container '>
//         <h2>Sign Up</h2>
//        {/* // <pre>{JSON.stringify(userinfo,undefined,2)}</pre> */}
//        <form onSubmit={handleSubmit(onSubmit)} >
//        <div className='row'>
//         <div className="col-lg-12 mt-16">
//           <label >Brand Name*</label>
//           <input type="text" className="form-control" id="brnad name" name='brnadname'  placeholder="Enter Brand name*" ref={register} />
//         </div>
//       </div>
//       {/* <div className='row'>
//         <div className='col-lg-6 col-12 mt-16'>
//            <label htmlFor='form-label'>Company Name*</label>
//            <input type='text' placeholder='Enter Company Name*'className='form-control'/>
//         </div>
//         <div className='col-lg-6 col-12 mt-16'>
//            <label className='form-label'>FEIN</label>
//            <input type='text' placeholder='Enter FEIN' className='form-control' />
//         </div>
//       </div>
//       <div className='row' >
//         <div className='col-12 mt-16'>
//           <label className=''form-label>Address*</label>
//           <textarea type='text' placeholder='Enter Address*' className='form-control' />
//         </div>
//       </div>
//       <div className='row'>
//         <div className="col-lg-12 mt-16">
//           <label  className="form-label">City*</label>
//           <input type="text" className="form-control"  placeholder="State*" />
//         </div>
//       </div>
//       <div className='row'>
//         <div className='col-lg-6 col-12 mt-16'>
//            <label className='form-label'>State*</label>
//            <select className='form-select'>
//             <option value=''>select please..</option>
//             <option value='1'>Andhrapradesh</option>
//             <option value='2'>Telangana</option>
//           </select>
//         </div>
//         <div className='col-lg-6 col-12 mt-16'>
//            <label className='form-label'>Postal Code*</label>
//            <input type='text' placeholder='Enter Zipcode*' className='form-control'/>
//         </div>
//       </div>
//       <div className='row'>
//         <div className="col-lg-12 mt-16">
//           <label  className="form-label">Website*</label>
//           <input type="text" className="form-control"  placeholder="Enter Website" />
//         </div>
//       </div>
//       <div className='row'>
//         <div className="col-lg-12 mt-16 mb-30">
//           <label  className="form-label">Phone Number*</label>
//           <input type="text" className="form-control"  placeholder="Enter Your Phone Number" />
//         </div>
//       </div> */}
//      <div className='row'>
//      <div className="col-12">
//     <button className=" btn btn-secondary form-control mt-50" type="submit">Next 
//     <img src={Arrow} />
//     </button>
//   </div>     
//       </div>
   
         
     
//        </form>
//     </div>
//   )
// }

// export default SignUp; 

// type FormValues = {
//   firstName:string;
//   lastName:string;
// }

const SignUp=()=>{
  // const {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
  //   firstName:'',
  //   lastName:''
  // })

 const {register,handleSubmit,formState:{errors}} = useForm();


   const onSubmit = (data) =>{
      console.log(JSON.stringify(data))
   }
  // console.log(errors)
  return(
    <div className='container'> 
    <h4 style={{textAlign:'center',marginTop:20}}>Register Application</h4>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='form-group mt-7 mb-3'>
          <label>First Name</label>
          <input type='text' id='fisrtname' placeholder='please enter fisrt name' className='form-control' name='firstname' {...register('firstName',{required:{value:true,message:'please enter the fisrt name filed'},
            minLength:{
              value:10,
              message:'please enter the name with min 10 characters'
            },
            maxLength:{
              value:15,
              message:"Length of the name dose not exceed more than 15 characters."
            }
          })} />
        {/* <small> {errors.firstName && <p  className='form-text text-danger'>this field is required</p>} </small> */}
        <small className='form-text text-danger'>{errors.firstName?.message}</small>
          </div>

  


          <div className='form-group   mb-3'>
          <label>Last Name</label>
          <input type='text' id='lastname' placeholder='please enter last name' className='form-control' name='lastname' {...register('lastname',{required:{
            value:true,
            message:'please Enter lastname'
          },
          minLength:{
            value:10,
            message:'please enter the name with min 10 characters'
          },
          maxLength:{
            value:15,
            message:"Length of the name dose not exceed more than 15 characters."
          }
          })} />
           <small className='form-text text-danger'>{errors.lastname?.message}</small>
          {/* <small>{errors.lastname?.type==='required' && <p className='form-text text-danger'>Please Enter LastName</p>}</small> */}
          </div>

          <div className='form-group   mb-3'>
            <label>Email</label>
            <input type='email' id='email' placeholder='please enter your email' className='form-control' name='email' {...register('email',{required:{
              message:'Email field is required',
              value:true
          },

          // PATTERNS 
          pattern:{
            value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message:'Please Eneter valid email id..'
          }
          
          })} />
          <small className='form-text text-danger'>{errors.email?.message}</small>
          </div>
          
          <div className='form-group   mb-3'>
            <label>Password</label>
            <input type='password' id='password' placeholder='Enter your password' className='form-control' name='pawword' 
            {...register('password',{
              required:{
                        value:true,
                        message:'Password field is required',
                        
                      },
                      // PATTERN /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/    or /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
                      // MSG :  'Minimum eight characters, at least one letter and one number'   or 'Minimum eight characters, at least one letter, one number and one special character'
                      pattern:{
                        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                        message:'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                      }
            
          })} />
          <small className='form-text text-danger'>{errors.password?.message}</small>
          </div> 
          <div className='form-group mb-3'>
            <label style={{display:'block'}}>Select State</label>
              <select className='col-md-6'{...register('country',{required:{
                value:true,
                message:'please select any country'
              }})}>
                <option value="">Choose Your state</option>
                <option value='Andhrapradesh'>Andhrapradesh</option>
                <option value='Telangana'>Telangana</option>
              </select>
              <small className='form-text text-danger' style={{display:'block'}}>{errors.country?.message}</small>
          </div>

          <div className='form-group   mb-3'>
          <label>Address</label>
          <textarea className='form-control'  type='text' {...register("address", {
     
            maxLength:{
               value:300,
               message:'dose not exceed more than 300 characters.'
            },
            required:'this address field is required'
            
          
           

          })} />
          <small className='form-text text-danger'>{errors.address?.message}</small>
          </div>

          <div className='form-group mb-3'>
            <label>Gender: {" "}</label>
            
            <input  type='radio' value='male' {...register('radio',{
              required:{
                value:true,
                message:'please select a gender field'
              }
            })} />
            <label>Male</label>
            <input  type='radio' value='female' {...register('radio',{
              required:{
                value:true,
                message:'please select a gender field'
              }
            })} />
            <label>Female</label>

            
            <small className='text-danger' style={{display:'block'}}>{errors.radio?.message}</small>
                        
          </div>

          <div className='form-group mb-3'>
            <label>checkout your favourite sports: {" "}</label>
            
            <input  type='checkbox' value='hockey' {...register('checkbox',{
              required:{
                value:true,
                message:'please checkout boxs'
              }
            })} />
            <label>my favourite game is Hockey</label>
            <input  type='checkbox' value='cricket' {...register('checkbox',{
              required:{
                value:true,
                message:'please checkout boxs'
              }
            })} />
            <label>my favourite game is Cricket</label>

            <input  type='checkbox' value='volleyball' {...register('checkbox',{
              required:{
                value:true,
                message:'please select checkbox your favourite game '
              }
            })} />
            <label>my favourite game is Volley-Ball</label>

            <small className='text-danger' style={{display:'block'}}>{errors.checkbox?.message}</small>
                        
          </div>
          <div className='form-group mb-3'>
              <label>Contact Details</label>
              <input type='text' className='form-control' placeholder='Please enter phone number' {...register("phone",{
                required:{
                  value:true,
                  message:" Please Enter phone number"
                },
                // maxLength:{
                //   value:10,
                //   message:'Enter Your 10 digit phone number...'
                // },
                // pattern  /^\d{10}$/
                pattern:{
                  value:/^[\+]?[(]?[ 0-9]{3}[)]?[-\ s\. ]?[0-9]{3}[-\s\. ]?[0-9]{4,6}$/im,
                  message: "This input is containes 10 digit phone number only."
                }
              })} />
              <small className='form-text text-danger'>{errors.phone?.message}</small>
          </div>
          <div className='form-group mb-3'>
            <label>Zipcode</label>
            <input type='number' className='form-control'{...register('zipcode',{
              required:'true',
              minLength:5,
              maxLength:10
            })}/>
            <small className='form-text text-danger'>{errors.zipcode?.type==="required" && "please enter zipcode"}</small>
            <small className='form-text text-danger'>{errors.zipcode?.type==="minLength" && "this field is required min 4 characters"}</small>
            <small className='form-text text-danger'>{errors.zipcode?.type==="maxLength" && "this field is required max 10 characters"}</small>
           
          </div>
          <input type='submit' value='submit' />
        </form>
          
    </div>
  )
}

export default SignUp;