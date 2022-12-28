import dbConnect from "../../lib/dbConnect";
import data from "../../lib/Models/data";
import Data from "../../lib/Models/dataSchema";

export default async function handler(req,res){
    await dbConnect();
    await Data.deleteMany();
    await Data.insertMany(data.data); 
    res.send({message : 'seeding successfully'})

}