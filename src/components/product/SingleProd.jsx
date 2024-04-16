import { useEffect, useState } from "react";

export function SingleProd({ id }) {
    const [data , setData] = useState([])
    const [game , setGame] = useState(id)

    useEffect(()=>{
        async function getAPI() {
        try{
            const get = await fetch(`http://localhost:5001/api/oggetti/${game}`);
            const json = await get.json();
            setData(json) 
        }catch(error) {
            console.error(error);
        }    
    }
    getAPI()
    },[])

    return(
        <div>
            <h1>{data.sub_title}</h1>
        </div>
    )
}