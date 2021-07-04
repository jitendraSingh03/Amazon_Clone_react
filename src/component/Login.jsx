import React,{useState} from 'react'
import '../component/Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from '../component/firebase'
function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const history=useHistory();
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(Email,Password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error =>alert(error.message))
        setEmail('')
        setPassword('')



    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" className="login__img" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type='text' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={Password} onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Optio nemo vitae modi ad 
                    quisquam non vel officiis magnam suscipit
                     nisi? Fugiat odio, quia itaque eos sequi dolore
                      provident iure praesentium veniam et dicta maiores 
                    mollitia earum molestiae nemo non alias?</p>
                    <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
