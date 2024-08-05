import React from "react";
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import moroccoImage from '../assets/icones/morocco.png'; 
import { Link } from "react-router-dom";



export default class LoginWelcom extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.type={
    //         url : props.url,
    //         type : props.type
    //     }
    // }
    render(){
        return(
            <div class="loginwelcome">
            <div class="welcome">
                <span>
                    <img src={moroccoImage} alt="" />
                </span>
                <h1>hey ! welcome </h1>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Minima, consequuntur.
            </p>
    
            <div class="btns">
                <Link to="/">
                    <button>go home</button>
                </Link>
                <Link to={this.props.url}>
                    <button>{this.props.type}</button>
                </Link>
            </div>
         </div>
        </div>
        )
    }
}