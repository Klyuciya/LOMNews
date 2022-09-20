import User from "../models/Users.js";
import Roles from "../models/Roles.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//register user
export const register = async (req, res) => {
  try {
    const { email, password, name, avatarURL, status } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const userRole = await Roles.findOne({ role: "User" });
  

    const newUser = new User({
      email,
      password: hash,
      name,
      role: [userRole.role],
      avatarURL,
      status,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );


    //insert in DB
    await newUser.save();

    //send respond to frontend
    return res.json({
      newUser,
      token,
      message: "User is registered",
    });
    // res.json({message: "OK"})
  } catch (error) {
    res.status(400).json({ message: "User registration error" });
  }
};

//Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "Such email was not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      token,
      user,
      message: "You are logged in",
    });
  } catch (error) {
    res.json({ message: "Error while authorising a user" });
  }
};

// Get Me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        message: "Such user doesn't exist",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({ message: "No access" });
  }
};

//Get users

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
