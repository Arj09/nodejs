const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        const connect = await mongoose.connect('mongodb+srv://Admin:Arjun%4009@arjuncluster.sqfphst.mongodb.net/Mycontact?retryWrites=true&w=majority');
        console.log('Database connected :',connect.connection.host, connect.connection.name )


    }
    catch(error){
        console.log(error);
        process.exit(1)

    }
}

module.exports = connectDb;