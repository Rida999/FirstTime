import {useParams} from "react-router-dom";
import useFetch from "./usefetch";
import Loading from "./loading";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
const {id}=useParams();
const {data,Pending,error}= useFetch("http://localhost:8000/blogs/" +id);
const history=useHistory();
const HandleDelete=()=>{
    fetch("http://localhost:8000/blogs/"+data.id,{
        method:"DELETE",
    })
    .then(()=>{
        history.push('/');
    })
}

    
    return ( 
        <div>
        {Pending && <Loading />}
        {error && <div>{error}</div>}
        {data && <div>
            <h2>{data.title}</h2>
            <p>writen by {data.author}</p>
            <button onClick={HandleDelete}>delete</button>
        </div>}
        </div>
     );
}
 
export default BlogDetails;