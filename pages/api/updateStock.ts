import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from '../../database/connectMongo'
import User from "../../models/User";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    _id: String;
    firstName: String;
    lastName: String;
    email: string;
    password: string;
    country: String;
    DOB: String;
    addressLineOne: String;
    addressLineTwo: String;
    city: String;
    zipCode: Number;
    state: String;
    telephone: number;
    employmentStatus: String;
    sourceOfFunds: String;
    annualIncome: String;
    imageProof: String;
    funds: Number;
    stocks: [
      {
        id: String;
        symbol: String;
        name: String;
        price: Number;
        amount: Number;
        total: Number;
        profit: Number;
        profitPercentage: Number;
      }
    ];
    crypto: [
      {
        id: String;
        symbol: String;
        name: String;
        image: String;
        current_price: String;
        amount: Number;
        total: Number;
        profit: Number;
        profitPercentage: Number;
      }
    ];
    stockWatchList: [
      {
        name: String;
        symbol: String;
      }
    ];
    cryptoWatchList: [
      {
        name: String;
        symbol: String;
      }
    ];
  };
}

const updateStock = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  await connectMongo();
  const { method } = req;


  switch (method) {

    case "PUT":
      try {
        let updatedUser;
       
      
        const user = await User.find({ _id: req.body._id });

        if (
            user[0].stockWatchList.filter((name) => name.symbol === req.body.stockWatchList.symbol)
              .length === 0
          ) {
            console.log('clear')
            updatedUser = await User.findByIdAndUpdate(
              req.body._id,
              {
                $push: { stockWatchList: req.body.stockWatchList },
              },
              { new: true }
            );
            
          } else {
            await User.findByIdAndUpdate(
              req.body._id,
              { $pull: { stockWatchList: { symbol: req.body.stockWatchList.symbol } } },
              { new: false }
            );
  
            updatedUser = await User.findByIdAndUpdate(
              req.body._id,
              {
                $push: { stockWatchList: req.body.stockWatchList },
              },
              { new: true }
            );
            
  
          }
  
          return res.status(201).json(updatedUser);
       

        return res.status(201).json(updatedUser);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default updateStock;
