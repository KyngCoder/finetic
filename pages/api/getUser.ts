import { NextApiRequest, NextApiResponse } from "next";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Conn from "../../lib/connectdb";
import User from "../../models/User";


interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    _id:String,
    firstName: String,
    lastName: String,
    email: string,
    password: string,
    country: String,
    DOB: String,
    addressLineOne: String,
    addressLineTwo: String,
    city: String,
    zipCode: Number,
    state: String,
    telephone: number,
    employmentStatus: String,
    sourceOfFunds: String,
    annualIncome: String,
    imageProof: String,
    funds: Number,
    stocks: [
      {
        id: String,
        symbol: String,
        name: String,
        price: Number,
        amount: Number,
        total: Number,
        profit: Number,
        profitPercentage: Number,
      }
    ],
    crypto: [
      {
        id:String,
        symbol: String,
        name: String,
        image: String,
        current_price: String,
        amount: Number,
        total: Number,
        profit: Number,
        profitPercentage: Number,
      }
    ],
    stockWatchList: [
      {
        name: String,
        Symbol: String,
      }
    ],
    cryptoWatchList: [
      {
        name: String,
        Symbol: String,
      }
    ],
  },
}

const getUser = async(req: ExtendedNextApiRequest, res: NextApiResponse) => {
    await Conn();
  const { method } = req;

  let { email, stocks } = req.body;
console.log(typeof(stocks))
  switch (method) {
    case "GET":
        
      try {
        const users = await User.find({ email });
        return res.json(users);
      } catch (e) {
        console.log(e);
        res.status(500).send("Internal server error: ");
      }

      break;

    case "PUT":
      try {

        
        const updatedUser = await User.findByIdAndUpdate(req.body._id,{
          $push:{"stocks":req.body.stocks}},{new:true}
         )
        return res.status(201).json(updatedUser);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }

      break;

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default getUser;
