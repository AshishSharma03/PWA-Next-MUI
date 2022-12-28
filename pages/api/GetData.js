import dbConnect from "../../lib/dbConnect"
import Data from "../../lib/Models/dataSchema";

export default async function handler(req,res){

    await dbConnect();
    const data = await Data.find({});

    try{
        res.send(data);

    }catch(error){
            res.status(400).json({success : false})
    }
    
}


