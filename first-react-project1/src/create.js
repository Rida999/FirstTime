import {useState} from "react";
import {useHistory} from "react-router-dom";


const Create = () => {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [color, setcolor] = useState("red");
    const [Pending, setPending] = useState(false);
    const history=useHistory();
    const handlesubmit=(e)=>{
            e.preventDefault();
            setPending(true)
            const blog={name,password,color};
            fetch("http://localhost:8000/blogs",{
                    method:'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(blog),})
            .then(()=>{

                setPending(false);
                history.push("/")
            })        

    }

    return ( 
        <div className="create">
            <form onSubmit={handlesubmit}>
               <label>name:</label>
                <input 
                    type="text"
                    required
                    onChange={(e)=>{setname(e.target.value)}}
                 /> 
                <label>password:</label>
                 <input 
                    type="password"
                    required
                    onChange={(e)=>{setpassword(e.target.value)}} 

                    /> 
                    <label>fav color:</label>
                    <select onChange={(e)=>{setcolor(e.target.value)}}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                    </select> 
                    {!Pending && <button>Add blog</button>}
                    {Pending && <button disabled>Adding blog...</button>}
                        
                    
            </form>
        </div>
     );}

 
export default Create;