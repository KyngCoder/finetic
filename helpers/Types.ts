export type User = {
    _id: string
    firstName: string
    lastName: string
    email: string
    password: string
    country: string
    DOB: string
    addressLineOne: string
    addressLineTwo: string
    city: string
    zipCode: number
    state: string
    telephone: number
    employmentStatus: string
    sourceOfFunds: string
    annualIncome: string
    imageProof: string
    funds: number
    stocks: [
      {
        id: string
        symbol: string
        name: string
        price: number
        amount: number
        total: number
        profit: number
        profitPercentage: number
      }
    ]
    crypto: [
      {
        id: string
        symbol: string
        name: string
        image: string
        current_price: string
        amount: number
        total: number
        profit: number
        profitPercentage: number
      }
    ]
    stockWatchList: [
      {
        name: string
        symbol: string
      }
    ]
    cryptoWatchList: [
      {
        name: string
        symbol: string
      }
    ]
}[]
  
export type UserProps = {
    user:{
        _id: string
        firstName: string
        lastName: string
        email: string
        password: string
        country: string
        DOB: string
        addressLineOne: string
        addressLineTwo: string
        city: string
        zipCode: number
        state: string
        telephone: number
        employmentStatus: string
        sourceOfFunds: string
        annualIncome: string
        imageProof: string
        funds: number
        stocks: [
          {
            id: string
            symbol: string
            name: string
            price: number
            amount: number
            total: number
            profit: number
            profitPercentage: number
          }
        ]
        crypto: [
          {
            id: string
            symbol: string
            name: string
            image: string
            current_price: string
            amount: number
            total: number
            profit: number
            profitPercentage: number
          }
        ]
        stockWatchList: [
          {
            name: string
            symbol: string
          }
        ]
        cryptoWatchList: [
          {
            name: string
            symbol: string
          }
        ]
    }[]
}

export type Asset =  {
    id: string
    symbol: string
    name: string
    price: number
    amount: number
    total: number
    profit: number
    profitPercentage: number
}[]

export type Graph = {
  label:string
  high: number
}[]