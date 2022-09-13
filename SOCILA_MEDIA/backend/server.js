const express =require('express');
const cors = require('cors');
const morgan = require("morgan")
const helmet = require('helmet');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const useRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/pots')
const User = require('./models/User')


const Url ="mongodb+srv://nit@cluster0.nm3zl.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(morgan('common'));
app.use(helmet());
app.use('/users',useRouter);
app.use('/auth',authRouter);
app.use('/posts',postRouter);

dotenv.config();
mongoose.connect("mongodb+srv://nit:nit@cluster0.nm3zl.mongodb.net/?retryWrites=true&w=majority",{  useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>console.log('DB connected')
)


// mongoose.connect(Url, {useUnifiedTopology:true,useNewParser:true, useCreateIndex: true,},
//     ()=>{
//         console.log('Mongo database is connected successfully..')
//     }
// )
app.listen(5000,()=>console.log("Server is running  on PORT 5000 ...."))
app.get('/',(req,res)=>{
      res.send("hellow server is runnning...")
});
// app.get("/user", async (req, res) => {
//     try {
//         const newUser = new User({
//           username: "tahmid",
//           email: "tahmid@gmail.com",
//           password: "123456",

//         });
    
//         const user = await newUser.save();
//         res.status(200).json(user);
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
// });

