import { useState,useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController;

    useEffect(()=>{
        setTimeout(
            () => {
            fetch(url, {signal: abortCont.signal}).then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch this resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(null);
                setError(null);
            }).catch(error=> {
                if(!error.message === 'AbortError'){
                    setIsPending(false);
                    setError(error.message);
                    setData([]);
                }
            });
        },1000)
        
        return () => abortCont.abort();
    },[])
    
    return ( {data, isPending, error} );
}
 
export default useFetch;