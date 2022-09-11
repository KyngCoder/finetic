const { default: mongoose } = require("mongoose")



const connectMongo = async() => {
    console.log(process.env.MONGO_URI)
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        
        if(connection.readyState == 1){
            console.log('Database Connected')
        }

    }catch(error){
        console.log(error)
    }
}

export default connectMongo