import React from "react";
import { FaGoogle,FaFacebook } from "react-icons/fa";
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginWelcom from "../components/LoginWelcom";
export default class Login extends React.Component{

    // constructor(props){
    //     super(props);
        
    // }
    render(){
        return(
            <>
                <div class="login-page">
    <div class="login-section">
    <LoginWelcom url="/register" type="sign up"></LoginWelcom>
<form method="POST" >
    <h2>log in</h2>
    <div class="d-flex justify-content-center gap-3">
        <FaFacebook color="blue" fontSize="20pt"></FaFacebook>
        <FaGoogle color="red" fontSize="20pt"></FaGoogle>
    </div>
    <div class="text-center my-4">
        <span>or with</span>
    </div>
    <div>    
        <input id="email" placeholder="yout email"   type="email" name="email" required autofocus autocomplete="username" />
    </div>
    <div class="mt-4">

        <input          id="password"
                        type="password"
                        name="password"
                        required autocomplete="current-password" />
    </div>
    <span class="flex items-center justify-end mt-4 mb-4"> 
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                Forgot your password? 
            </a>
    </span>
    <button>
        Log in
    </button>
</form>
</div>
</div>

            </>
        )
    }



}