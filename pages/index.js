

import React ,{useState,useEffect}from 'react'
import dbConnect from '../lib/dbConnect'
import Data from '../lib/Models/dataSchema'
import DashboardBody from '../core/DashboardBody'
import Loader from '../components/ErrorHandlers/Loader';
import Login from '../components/session/Login';
import { LogInContext } from '../core/SessionHandles/LoginContext';


function index(props) {
  const [data, setData] = useState({});
  const [login, setLogin] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [UserName ,setUserName] = useState("GOKU");

  useEffect(() => {

    if(props.data){
      setData(props.data)
    setTimeout(()=>{
      setLoading(false);
    },1000)
    }
  }, []);

  if(Loading){
    return <Loader/>
  }

  

  
  return (
    <>
    <LogInContext.Provider value={{login,setLogin,UserName,setUserName}}>

      {
        (login)?

        <DashboardBody data={data}/>
        :
        <Login/>
      }
      
      </LogInContext.Provider>
    </>
      )  
     
  
}



function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}


export async function getServerSideProps(){

  await dbConnect();
  const data = await Data.find({}).lean();

  return {props : { data:  data.map(convertDocToObj)}}

}



export default index



