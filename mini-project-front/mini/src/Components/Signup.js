import react,{useState}from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import tenor from "../tenor.gif"

const Signup = () => {
    const [userName,setUserName]=useState(' ');
    const [password,setPassword]=useState(' ');
    const [email,setEmail]=useState(' ');
    const [phone,setPhone]=useState(null);
    const [isLoading,setLoading]=useState(false);
    const [hasError,setHasError]=useState(false);
    const[error,setError]=useState(' ');
    let navigate=useNavigate();
    
    const submitHandler=(event)=>
    {
        event.preventDefault();
        setLoading(true);
        axios.post('http://localhost:3000/user/signup',{
            userName:userName,
            email:email,
            phone:phone,
            password:password

        })
        .then(res=>{
            setLoading(false);
            console.log(res.data);
            setHasError(false);
            navigate('/loginpage');
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
            setHasError(true);
            setError(err.message);
        })

    }
    return(

        <>
            {isLoading && <div>
    <img style={{width:'150px'}} src={tenor}/>
   </div>}
 {!isLoading  && <div>
    <body className="mainimage">
    <div className="signup-container">
        <div className="form-box">
            <h2>Sign Up</h2>
            <form  onSubmit={submitHandler}>
                <div className="input-box">
                    <input type="text" name="username" onChange={(e)=>setUserName(e.target.value)} required/>
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}
                    required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="text" name="contact" onChange={(e)=>setPhone(e.target.value)} required/>
                    <label>Contact Number</label>
                </div>
                <div className="input-box">
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>
                
                <button type="submit" className="signup-btn">Sign Up</button>
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
export default Signup;