import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name: string;
}
interface FetchGenreResponse
{
    count:number;
    results:Genre[];
}

const useGenres = () =>{
    const [genres,setgenres]=useState<Genre[]>([]);
    const [error,seterror]=useState('');
    const [isLoading,setLoading]=useState(false);
    useEffect(()=>{
        const controller= new AbortController();
        setLoading(true);
        apiClient.get<FetchGenreResponse>("/genres",{signal:controller.signal})
        .then(res=>{setgenres(res.data.results)
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
    return {genres,error,isLoading};
}

export default useGenres;