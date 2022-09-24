import { NextApiRequest, NextApiResponse } from "next";
import Conn from "../../lib/connectdb";

const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../../models/User";

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const KEY = "hey";

  await Conn();

  switch (method) {
    case "GET":
      res.json("get what");

      break;

    case "POST":
      const { email, password, telephone } = req.body;
      console.log(email,password,telephone)

      if (!email || !password || !telephone) {
        return res.status(400).json({ message: "all fields are required" });
      }

      if (!validator.isEmail(email)) {
        return res
          .status(400)
          .json({ message: "please provide a valid email" });
      }

      if (!validator.isStrongPassword(password)) {
        return res
          .status(400)
          .json({ message: "password is not strong enough" });
      }

      if (!validator.isMobilePhone(telephone)) {
        return res.status(400).json({ message: "telephone is not valid" });
      }

      try {
        console.log(email, password, telephone);

        const existingUser = await User.findOne({ email });

        if (existingUser)
          return res.status(400).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
          password: hashedPassword,
          email: email,
          telephone: telephone,
        });

        console.log(user);

        const token = jwt.sign(
          {
            name: user.email,
            id: user._id,
          },
          KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      } catch (error) {
        res.status(500).json(error);
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default SignUp;
