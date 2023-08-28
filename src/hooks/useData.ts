import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T>
{
    count:number;
    results:T[];
}

const useData = <T>(endpoint:string) =>{
    const [data,setdata]=useState<T[]>([]);
    const [error,seterror]=useState('');
    const [isLoading,setLoading]=useState(false);
    useEffect(()=>{
        const controller= new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
        .then(res=>{setdata(res.data.results)
         setLoading(false);
        })
        .catch(err=>{
            if(err instanceof CanceledError)
            { console.log("system");
            return;
            }
            seterror(err.message);
            setLoading(false);
           
        })
        return ()=>controller.abort();
        

    },[]);
    return {data,error,isLoading};
}

export default useData;