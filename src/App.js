import './App.css';
import React,{ useEffect } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Payment from './component/Payment';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { auth } from './component/firebase';
import { useStateValue } from './component/StateProvider';


function App() {

  const [{user},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('app>>>',user)
   
     if(authUser){// user login
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
      }
      else{ //user logout
          dispatch({
            type:'SET_USER',
            user:null,
          })
      }
    })
  }, [user])
  return (
    <div className="app">
    <Router>
    
      <Switch>
      <Route path='/payment'>
      <Header/>
          <Payment/>
        </Route>
      <Route path='/login'>
          <Login/>
        </Route>
      <Route path='/checkout'>
      <Header/>
            <Checkout/>
        </Route>
        <Route path='/'>
        <Header/>
            <Home/>
        </Route>
      </Switch>
    </Router>

      {/* Header */}
        {/* navbar */}
        {/* Banner */}
      {/* Home */}
    </div>
  );
}

export default App;
