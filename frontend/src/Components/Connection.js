import React, {useState, useEffect} from 'react'
import axios from 'axios';

const LockContext = React.createContext({
    result: [], setResult: () => {}
  })

export default function Message() {

    const [result,setResult] = useState(null);

    const message = async() => {
        try{
            let res_temp = await axios.get("http://127.0.0.1:8000/status");
            let result = res_temp.data;
            setResult(result);
        }
        catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        message()
    },[])
    
    if (result == "True"){
        return(
            <div>
                Locked
            </div>
        )
    }
    return(
        <div>
            Unlocked
        </div>
    )
    
 
}



