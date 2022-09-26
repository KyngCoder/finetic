import mongoose from "mongoose";

 type IUsers = {
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
  telephone: String;
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
      Symbol: String;
    }
  ];
  cryptoWatchList: [
    {
      name: String;
      Symbol: String;
    }
  ];
}

const UserSchema = new mongoose.Schema<IUsers>(
  {
    firstName: String,
    lastName: String,
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    country: String,
    DOB: String,
    addressLineOne: String,
    addressLineTwo: String,
    city: String,
    zipCode: Number,
    state: String,
    telephone: { type: "String", required: true, Unique: true },
    employmentStatus: String,
    sourceOfFunds: String,
    annualIncome: String,
    imageProof: String,
    funds: Number,
    stocks: [
      {
        id:String,
        symbol: String,
        name: String,
        price: Number,
        amount: Number,
        total: Number,
        profit: Number,
        profitPercentage: Number,
      },
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
      },
    ],
    stockWatchList:[
      {
        name: String,
        symbol:String,
      }
    ],
    cryptoWatchList:[
      {
        name: String,
        symbol:String,
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.models.User<IUsers> ||  mongoose.model<IUsers>("User", UserSchema);
export default User;