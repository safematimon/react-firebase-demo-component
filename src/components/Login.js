import React,{useState} from "react";
import auth from '../firebase'
import ReactTypingEffect from 'react-typing-effect'
import './Login.css';

// signInwithEmailAndPassword(username,password)

const Login =({ setSession })=>{
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const handleLogin= async ()=>{
        try{
            console.log('login',username,password);
            const response = await auth.signInWithEmailAndPassword(username,password);
            
            const {user} = response
            // console.log('user',user);
            setSession({
                Islogin: true,
                currentuser:user,
            });
        } catch(error){
            setSession({
                Islogin:false,
                currentuser:null,
                errormsg:error.message
            })
            window.alert("valid Email or Password");

        }
    }
    //REigster
    const handleRegis= async ()=>{
        try{
            console.log('login',username,password);
            const response = await auth.createUserWithEmailAndPassword(username,password);
            
            const {user} = response
            // console.log('user',user);
            setSession({
                Islogin: true,
                currentuser:user,
            });
        } catch(error){
            setSession({
                Islogin:false,
                currentuser:null,
                errormsg:error.message
            })
        }
    }

    const handleusername = event =>{
        setusername(event.target.value)
    }

    const handlepassword = event =>{
        setusername(event.target.value)
    }


    return(
        <div className="back">
            {/* <input type="email" placeholder="xxx@xxx.com" onChange={handleusername}/>
            <input 
                type="password" 
                placeholder="Password" 
                onChange={event=>{
                    setpassword(event.target.value);
            }}/> */}
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <h1 class="mb-4"><ReactTypingEffect text={'TO THE MOON'} speed={80} eraseDelay={1000} className="typingeffect" /><i class="fas fa-moon"></i></h1>
                        <form>
                            <div class="form-floating mb-4">
                                <input type="email" placeholder="xxx@xxx.com" onChange={handleusername} class="form-control" />
                                {/* <input type="email" class="form-control" name="email" id="email" placeholder="xxx@xxx.com" onChange={handleusername}/> */}
                                <label for="email">Email</label>
                            </div>
                            <div class="form-floating mb-2">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                onChange={event=>{
                                    setpassword(event.target.value);
                            }} class="form-control" />
                                {/* <input type="email" class="form-control" name="email" id="email" placeholder="xxx@xxx.com" onChange={handlpassword}/> */}
                                <label for="email">Password</label>
                            </div>
                                {/* <button type="button" onClick={handleLogin} class="btn btn-outline-primary m-1">LOGIN</button>
                                <button type="button" onClick={handleRegis} class="btn btn-outline-primary m-1">REGISTER</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <button type="button" onClick={handleLogin} class="btn btn-outline-primary m-2" >LOGIN</button>
            <button type="button" onClick={handleRegis} class="btn btn-outline-primary m-2" >REGISTER</button>
        </div>
    ) 
}

export default Login;