import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
interface Game{
    id:Number;
    name:string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
  }
const GameGrid = () => {
    const [games,setgames]=useState<Game[]>([]);
    const [error,seterror]=useState('');
    useEffect(()=>{
        apiClient.get<FetchGameResponse>("games")
        .then(res=>setgames(res.data.results))
        .catch(err=>seterror(err.message));
    },[])
  return (<>
    {error && <Text>Error occured</Text>}
    <ul>
        {games.map(game=> <li >{game.name}</li>)}
    </ul>
    
    </>
  )
}

export default GameGrid