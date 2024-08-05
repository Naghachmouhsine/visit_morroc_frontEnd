import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import '../assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginWelcom from "../components/LoginWelcom";

export default class Register extends React.Component {
    render() {
        return (
            <>
                <div className="login-page">
                    <div className="login-section">
                        <LoginWelcom url="/login" type="log in"></LoginWelcom>

                        <form method="POST" style={{paddingTopc: "0",paddingBottom : "0"}}>
                        <h2>sign up with</h2>
                        <div className="d-flex justify-content-center gap-3">
                                <FaFacebook color="blue" fontSize="20pt"></FaFacebook>
                                <FaGoogle color="red" fontSize="20pt"></FaGoogle>
                        </div>
                        <div className="text-center my-4">
                                <span>or with</span>
                            </div>
                            <div>
                                <input 
                                    id="name" 
                                    placeholder="full name" 
                                    type="text" 
                                    name="name" 
                                    required 
                                    autoFocus 
                                />
                            </div>
                            <div className="mt-1">
                                <input 
                                    id="email" 
                                    placeholder="email" 
                                    type="email" 
                                    name="email" 
                                    required 
                                    autoComplete="username" 
                                />
                            </div>
                            <div className="mt-1">
                                <input 
                                    id="password" 
                                    placeholder="password" 
                                    type="password" 
                                    name="password" 
                                    required 
                                    autoComplete="new-password" 
                                />
                            </div>
                            <div className="mt-1">
                                <input 
                                    id="password_confirmation" 
                                    placeholder="confirm password" 
                                    type="password" 
                                    name="password_confirmation" 
                                    required 
                                    autoComplete="new-password" 
                                />
                            </div>
                            <button className="mt-2">
                                sign up
                            </button>


                        </form>
                    </div>
                </div>
            </>
        );
    }
}
