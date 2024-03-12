const express = require('express');
const User = require('../modules/Users')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = process.env.JWT_SECRET;


//ROUTE 1: create a User using: Post "/api/auth/create". no login required
router.post('/create',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','password must have 5 character').isLength({min:5})
], async (req , res)=>{
    let success = false;
      // if there are eorrors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
    return res.status(400).json({success,errors: errors.array()});
  }

     // check weather the user with this email  exists already

  try{

  let user = await User.findOne({email: req.body.email})
  console.log(user)
  if(user){
    success = false;
    return res.status(400).json({success,error: "sorry a user with this email already exists"})
  }

      // create a new user 
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hashSync(req.body.password, salt);
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
  })
  const data = {
    user:{
      id: user.id
    }
  }
  const authToken = jwt.sign(data,JWT_SECRET)
  success = true;
  res.json({success,authToken})
}
catch(error){
  console.error(error.message)
  res.status(500).send("internal server error")
}
})


//ROUTE 2: authenticating using: Post "/api/auth/login". no login required
router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','password can not be empty').exists()
], async (req , res)=>{
  let success = false;
  // if there are eorrors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    success=false;
  return res.status(400).json({success,errors: errors.array()});
}

  const{email,password} = req.body;
try{

  let user = await User.findOne({email})
  if(!user){
    success = false;
    return res.status(400).json({success,error: "please try to login with correct credential"})
  }

  const passwordCompare = await bcrypt.compare(password,user.password);
  if(!passwordCompare){
    success = false;
    return res.status(400).json({success,error:"please try to login with correct credentials"})
  }
   
  const data = {
    user:{
      id: user.id
    }
  }

  const authToken = jwt.sign(data,JWT_SECRET)
  success = true;
  res.json({success,authToken})
}
catch(error){
  console.error(error.message)
  res.status(500).send("internal server error")
}
})


// ROUTE 3: get logedin user detail using: POST: "/api/auth/getuser" .  login required
router.post('/getuser',fetchuser, async (req , res)=>{

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
})

module.exports = router