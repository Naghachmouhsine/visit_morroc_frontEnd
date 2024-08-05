import React from "react";
import NavBare from "../components/NavBare";
import Header from "../components/Header";
import Main from "../components/Main";
class Home extends React.Component{
    
    render(){
        sessionStorage.setItem("auth",true);
        return(
        <> 
        <NavBare ></NavBare>
        <Header></Header>
        <Main></Main>
        </>      
        )       
    }    
}
export default Home;