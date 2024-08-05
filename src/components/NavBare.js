import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import moroccoImage from '../assets/icones/morocco.png';

class NavBare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false, // Mettez à jour cet état en fonction de votre logique d'authentification
    };
    this.contentNavBare = [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "Cities", link: "" },
      { name: "Our Services", link: "/services" },
      { name: "Add Blogs", link: "/dashboard" }
    ];
    this.cities = [
      { name: 'Fes', path: '/fes' },
      { name: 'Marrakesh', path: '/marrakesh' },
      { name: 'Rabat', path: '/rabat' },
      { name: 'Touanate', path: '/touanate' },
      { name: 'Casablanca', path: '/casablanca' },
      { name: 'Tanger', path: '/tanger' }
    ];
    
  }
  render() {
    return (
      <Navbar expand="lg" bg="danger" variant="dark" className="px-3">
          <Navbar.Brand>
            <img src={moroccoImage} width="60" alt="Morocco" style={{ backgroundColor: "white", borderRadius: "50%" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.contentNavBare.map((content, index) => (
                <li className="nav-item" key={index}>
                  {!(content.name === "Cities") ?
                    (<Link className="nav-link" to={content.link} style={{ color: 'white', fontWeight: 'bold' }}>
                      {content.name}
                    </Link>)
                    : (<NavDropdown title={<span style={{ color: 'white', fontWeight: 'bold' }}>Cities</span>} id="basic-nav-dropdown">
                      {this.cities.map((city, index) => (
                        <LinkContainer key={index} to={city.path}>
                          <NavDropdown.Item>{city.name}</NavDropdown.Item>
                        </LinkContainer>
                      ))}
                    </NavDropdown>)
                  }
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn" type="submit">
                <FontAwesomeIcon icon={faSearch} style={{ color: "white" }}></FontAwesomeIcon>
              </button>
            </form>
            <div className="login">
              <Link to={!this.state.isAuthenticated ? "/login" : "/profile"}>
                <FontAwesomeIcon icon={!this.state.isAuthenticated ? faUser : faUserCheck} style={{ color: !this.state.isAuthenticated ? "#fff" : "#56df0c", fontSize: '20pt', marginLeft: '10px' }} />
              </Link>
            </div>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBare;
