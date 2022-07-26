import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from '../../database/connectMongo'


const bcrypt = require("bcrypt");
import jwt from 'jsonwebtoken'
import validator from 'validator'
import User from "../../models/User";

const SignIn  = async(req:NextApiRequest, res:NextApiResponse) => {
    const { method } = req

    const KEY = 'hey'

  await connectMongo()

  switch (method) {

    case 'GET':
        res.json('get what')

        break;
    
    case 'POST':
        const {email,password} = req.body

        console.log(email,password)

        if(!email || !password) {
          return res.status(400).json({message:'all fields are required'})
        }

       
      
        try{
           
            const existingUser = await User.findOne({email})

            if(!existingUser) return res.status(404).json({message: 'User not found, please sign up'})

          console.log(password, existingUser.password)

            const isPasswordCorrect = await bcrypt.compare(
                password,
                existingUser.password
              );

             

              if (!isPasswordCorrect) {
                console.log("wrong password");
                return res.status(400).json({ message: "Invalid credentials" });
              }
            

              const token = jwt.sign(
                { email: existingUser.email, id: existingUser.id },
                KEY,
                { expiresIn: "1h" }
              );
          
             return res.status(200).json({ result: existingUser, token });
          
            } catch (error) {
                console.log(error)
              return res.status(500).json({ message: "something went wrong" });
            }

        break;
   
    default:
      res.status(400).json({ success: false })
      break
  }
}

export default SignIn