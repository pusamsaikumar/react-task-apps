

const express =require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan")
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const multer = require("multer");
const path = require("path");

const useRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/pots');
const conversationRouter = require('./routes/conversations');
const messageRouter = require('./routes/messages');
const User = require('./models/User');


// middlewares this should be maintaine above the dependencies
app.use("/images",express.static(path.join(__dirname,"public/images")));




dotenv.config();
mongoose.connect("mongodb+srv://nit:nit@cluster0.nm3zl.mongodb.net/?retryWrites=true&w=majority",{  useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>console.log('DB connected')
)
// middlewares this should be maintaine above the dependencies
app.use("/images",express.static(path.join(__dirname,"public/images")));

//middleware
app.use(express.json());
app.use(cors({origin:'*'}));
app.use(helmet());
app.use(morgan("common"));
app.use('/users',useRouter);
app.use('/auth',authRouter);
app.use('/posts',postRouter);
app.use('/conversations',conversationRouter);
app.use('/messages',messageRouter)

app.listen(5000,()=>console.log("Server is running  on PORT 5000 ...."))
app.get('/',(req,res)=>{
      res.send("hellow server is runnning...")
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});