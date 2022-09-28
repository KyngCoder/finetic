const { default: mongoose } = require("mongoose")

const MONGO_URI = process.env.MONGO_URI
console.log(process.env.MONGO_URI)
const connectMongo = async() => {
    try{
        const {connection} = await mongoose.connect(MONGO_URI)
        
        if(connection.readyState == 1){
            console.log('Database Connected')
        }

    }catch(error){
        console.log(error)
    }
}

export default connectMongo