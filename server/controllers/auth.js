import User from "../models/Users.js";
import bcrypt from "bcryptjs";

//register user
export const register = async (req, res) => {
  try {
    const { email, password, name, role, avatarURL, status } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res.json({
        message: "email exists",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      password: hash,
      name,
      role,
      avatarURL,
      status,
    });

    //insert in DB
    await newUser.save();

    //send respond to frontend
    res.json({
      newUser,
      message: "User is registered",
    });
  } catch (error) {
    res.json({ message: "Error while registering a user" });
  }
};



//Login user
export const login = async (req, res)=>{
  try{
      const {email, password} = req.body;
      const user = await User.findOne({email});
      if(!user){
          return res.json({
              message: "Such email was not found",
          })
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password)
      if(!isPasswordCorrect){
          return res.json({
              message: "Wrong password"
          })
      }

      const token = jwt.sign({
          id: user._id,
          email: user.email,
      },
      process.env.JWT_SECRET,
      {expiresIn: '30d'},
      )

      res.json({
          token, user, 
          message: 'You are logged in',
      })

  }catch(error){
      res.json({message: "Error while authorising a user"})
  }
}



// Get Me
export const getMe = async (req, res)=>{
  try{
const user = await User.findById(req.userId);

if(!user){
  return res.json({
      message: "Such user doesn't exist",
  })
}
const token = jwt.sign({
  id: user._id,
},
process.env.JWT_SECRET,
{expiresIn: '30d'},
)

res.json({
  user, 
  token, 
})
  }catch(error){
      res.json({message: "No access"})
  }
};