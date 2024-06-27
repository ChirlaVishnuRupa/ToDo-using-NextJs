import mongoose from "mongoose"

export const ConnectDB=async ()=>{
    const URI=process.env.MONGODB_URI
    await mongoose.connect(URI);
    console.log("database connected successfully");
}
export default ConnectDB;
