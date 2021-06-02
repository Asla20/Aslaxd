import mongoose from 'mongoose'

const dbconnection = async function(){

    try{
        await mongoose.connect(process.env.MONGODB_CNX, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

    console.log('base de datos online')

    }  catch (err) { 
           console.log("Error ==> ", error)
    }
}
export default dbconnection