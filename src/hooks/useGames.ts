import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
  }

export interface Game{
    id:Number;
    name:string;
    background_image:string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games,setgames]=useState<Game[]>([]);
    const [error,seterror]=useState('');
    const [isLoading,setLoading]=useState(false);
    useEffect(()=>{
        const controller= new AbortController();
        setLoading(true);
        apiClient.get<FetchGameResponse>("/games",{signal:controller.signal})
        .then(res=>{setgames(res.data.results)
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
    return {games,error,isLoading};
}

export default useGames;