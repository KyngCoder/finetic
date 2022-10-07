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
    passportProof:[
      {
        data_url:string
      }
    ]
    driverProof:[
      {
        data_url:string
      }
    ]
    idProof:[
      {
        data_url:string
      }
    ]
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
    person:{
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
        passportProof:[
          {
            data_url:string
          }
        ]
        driverProof:[
          {
            data_url:string
          }
        ]
        idProof:[
          {
            data_url:string
          }
        ]
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
    id?: string
    symbol: string
    name: string
    price?: number
    amount?: number
    total?: number
    profit?: number
    profitPercentage?: number
}[]

export type Graph = {
  label:string
  high: number
}[]