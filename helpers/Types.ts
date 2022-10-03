export type User = {
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
}[]
  
export type UserProps = {
    user:{
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
    }[]
}

export type Asset =  {
    id: String;
    symbol: String;
    name: String;
    price: Number;
    amount: Number;
    total: Number;
    profit: Number;
    profitPercentage: Number;
}[]