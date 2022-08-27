const { default: mongoose } = require("mongoose")

const MONGO_URI = 'mongodb+srv://kyngcoder:kyngcoder@cluster0.bcm8m.mongodb.net/?retryWrites=true&w=majority'

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