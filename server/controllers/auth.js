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
      message: "Success registered",
    });
  } catch (error) {
    res.json({ message: "Error register user" });
  }
};

////////// Login user
