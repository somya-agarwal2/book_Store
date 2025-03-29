
import react,{useState}from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import tenor from "../tenor.gif"
import Book from "./Book";

const Login = () => {
  
        const [userName,setUserName]=useState(' ');
        const [password,setPassword]=useState(' ');
       
        const [isLoading,setLoading]=useState(false);
        const [hasError,setHasError]=useState(false);
        const[error,setError]=useState(' ');
        let navigate=useNavigate();
        
        const submitHandler=(event)=>
        {
            event.preventDefault();
            setLoading(true);
            axios.post('http://localhost:3000/user/login',{
                userName:userName,
               
                password:password
    
            })
            .then(res=>{
                setLoading(false);
                console.log(res.data);
                setHasError(false);
                navigate('/Book');
            })
            .catch(err=>{
                console.log(err);
                setLoading(false);
                setHasError(true);
                setError(err.response.data.msg);
            })
    
        }
        return(
            <>
            {isLoading && <div>
    <img style={{width:'150px'}} src={tenor}/>
   </div>}
 {!isLoading  &&<div>
        <body>
<div className="mainimg">
    
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={submitHandler}> 
            <input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} required/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/>
            <button type="submit">Login</button>
        </form>
    </div>
</div>

</body>
</div>}
{hasError && <div>
        <p style={{color:'red'}}>Error :- {error}</p>
        </div>}
</>
    )
}
export default Login;