// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect'
// import auth  from './firebase';
import auth from '../firebase'
// import auth from 'firebase/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import './Color.css'


const Color=()=>{
    const [hex,setHex]=useState("#ffffff");
    const randomHex=()=>{
      const randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
      setHex(randomcolor);
    };

    useEffect(() => {
        const handleAuth = auth.onAuthStateChanged(user => {
          if (user) {
            setSession({
              Islogin: true,
              currentuser: user,
              errormsg: null
            });
          }
        });
    
        return () => {
          handleAuth();
        };
      }, []);
      
    
      const [session,setSession]=useState({
        Islogin: false,
        currentuser: null,
        errormsg: null
      })
    
    //   if(session.Islogin){
    //     <header className="App-header">
    //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   }
    
    
    //   const handleLogout=()=>{
    //     auth.signOut().then(response =>{
    //       setSession({
    //         Islogin: false,
    //         currentuser: null
    //       });
    //     });
    //   }
    
    
    return (
        <div className='AppColor' style={{backgroundColor:`${hex}`,overflow:'hidden'}}>
          <h4 className='gen'>random color generator</h4>
          <div className='containerColor'>
            <h1 className='hex'>{hex}</h1>
            <button className='btnc' onClick={randomHex}> <ReactTypingEffect text={['RANDOM','Click!!!']} speed={80} eraseDelay={1000} className="typingeffect" /></button>
            <button className='btnc' onClick={()=>navigator.clipboard.writeText(hex)}>Copy <i class="far fa-copy"></i></button>
            {/* <button type='button' onClick={handleLogout}>SIGNOUT</button>       */}
          </div>
        </div>
        );
  }
  
  export default Color;