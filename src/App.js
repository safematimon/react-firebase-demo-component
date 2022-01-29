import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Color from './components/Color';
import Check from './components/Check'
import React, { useEffect, useState } from 'react';
import auth  from './firebase';
// import auth from 'firebase/compat/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import { checkActionCode } from 'firebase/auth';

function App() {

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

  if(session.Islogin){
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  }


  const handleLogout=()=>{
    auth.signOut().then(response =>{
      setSession({
        Islogin: false,
        currentuser: null
      });
    });
  }



  return (
    <div className="App">
      {
        session.Islogin ?(      
          // <header className="App-header">
          //   <img src={logo} className="App-logo" alt="logo" />
          //   <h1>Hello,{session.currentuser && session.currentuser.email}</h1>
          //   <button type='button' onClick={handleLogout}>SIGNOUT</button>
          // </header>
          [<Color />,
          <button type='button' onClick={handleLogout} className='logout'><i class="fas fa-sign-out-alt"></i></button>,
          <Check />  
          ]
          ) 
      : (<Login setSession={setSession} />)
      }

    </div>
  );
}

export default App;
