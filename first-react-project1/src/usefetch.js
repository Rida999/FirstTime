import {useState,useEffect} from "react";

const useFetch = (url) => {
    const [Pending, setPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, seterror] = useState(null);
    const abortCont= new AbortController();

        useEffect(() => {
            setTimeout(() => {
            fetch(url,{ signal:abortCont.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error(alert("error 212"));
                }
               return res.json();
            })
            .then((data)=>{
                setData(data);
                setPending(false);
                seterror(false);
            })
            .catch((err)=>{
                if(err.name==='AbortError'){
                    
                }
                else{
                seterror(err.message);  //seterror(err)========errrrror!!!!!!!
                setPending(false);
                }
            })
        },1000);

        return()=>abortCont.abort()}

        , [url]);

        return { data,Pending,error };
     
}
 
export default useFetch;