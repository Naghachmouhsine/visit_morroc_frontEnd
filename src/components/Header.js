import React from "react";
import backgroundImage from "../assets/images/jameefna.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../assets/style.css'
import { FaSearch } from 'react-icons/fa';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.style={
            backgroundImage:`url(${backgroundImage})`,
          };
        this.styleSearch={
            fontSize: '24pt',
            color: '#e60023',
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer',
            margin: '3px',
            transition:' 0.4s linear all'
        }
    }
    render(){
        return (
          <header style={this.style}>
            <form action="" class="search-section">
            <input class="search-box" type="search"  placeholder="touanate" />
            {/* <button className="btn" type="submit"> */}
                 <FaSearch 
                 style={this.styleSearch}
                 ></FaSearch>
            {/* </button>             */}
            </form>
                <h1>discover morocco online</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat suscipit in id repellat aperiam
                exercitationem voluptatum sint pariatur dolorem eaque beatae itaque, quos quisquam excepturi illo odio culpa.
                Numquam!</p>
                <button>discover</button>
                <button>watch video</button>
        </header>
        )
    }
}

export default Header;