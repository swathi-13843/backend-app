<<<<<<< HEAD
import mongoose from "mongoose";
const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(err){
        console.log(err);
    }
};

=======
import mongoose from "mongoose";
const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(err){
        console.log(err);
    }
};

>>>>>>> dc3db8719a2fef1dbcd15cab215eb9aec4a6a66f
export default dbConnect;