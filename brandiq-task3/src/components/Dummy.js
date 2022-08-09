import React from 'react'

function Dummy() {
 
    
  return (
    <div>
        <button >submit</button>

    </div>
  )
}

export default Dummy



// type UserInfo = {
//   name: string;
//   email: string;
// }

// function exportUserInfo(userInfo: UserInfo) {
//   const fileData = JSON.stringify(userInfo);
//   const blob = new Blob([fileData], { type: "text/plain" });
//   const url = URL.createObjectURL(blob);
//   const path =PATH.UserInfo('./data.json')
//   const link = document.createElement("a");
//   link.download = "user-info.json";
//   link.href = url;
//   link.click();
// }














// const RegisterUser = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     phoneNo: "",
//   });
//   const schema = yup.object().shape({
//     firstname: yup.string().required("First name is required"),
//     lastname: yup.string().required("Last name is required"),
//     email: yup.string().required("Email is required"),
//     password: yup.string().required("Password is required"),
//   });
//   const { register, handleSubmit, errors } = useForm({
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });
// const {email, password} = formData;
//   const handleFormSubmit = async (data) => {
//     setFormData({
//       email: data.email,
//       password: data.password
//     });
// const newUser = { email, password};
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const body = JSON.stringify(newUser);
//       await axios.post(`http://localhost:5000/users`, body, config);
//     } catch (err) {
//       console.log(err);
//     }
//     // }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit(handleFormSubmit)}>
//         <Input
//           type="email"
//           label="Email"
//           name="email"
//           ref={register}
//           error={!!errors.email}
//           helperText={errors?.email?.message}
//         />

//         <Input
//           type="password"
//           label="Password"
//           name="password"
//           ref={register}
//           error={!!errors.password}
//           helperText={errors?.password?.message}
//         />
//         <Button type="submit" className="btn btn-primary">
//           Submit
//         </Button>
//       </Form>


// const RegisterUser = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     phoneNo: "",
//   });
//   const schema = yup.object().shape({
//     firstname: yup.string().required("First name is required"),
//     lastname: yup.string().required("Last name is required"),
//     email: yup.string().required("Email is required"),
//     password: yup.string().required("Password is required"),
//   });
//   const { register, handleSubmit, errors } = useForm({
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });
// const {email, password} = formData;
//   const handleFormSubmit = async (data) => {
//     setFormData({
//       email: data.email,
//       password: data.password
//     });
// const newUser = { email, password};
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const body = JSON.stringify(newUser);
//       await axios.post(`http://localhost:5000/users`, body, config);
//     } catch (err) {
//       console.log(err);
//     }
//     // }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit(handleFormSubmit)}>
//         <Input
//           type="email"
//           label="Email"
//           name="email"
//           ref={register}
//           error={!!errors.email}
//           helperText={errors?.email?.message}
//         />

//         <Input
//           type="password"
//           label="Password"
//           name="password"
//           ref={register}
//           error={!!errors.password}
//           helperText={errors?.password?.message}
//         />
//         <Button type="submit" className="btn btn-primary">
//           Submit
//         </Button>
//       </Form>