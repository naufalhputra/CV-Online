import React, { Component } from 'react'
import logo from "../Image/LogoAPB.png"
import '../Css/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


class Navbar extends Component {
  constructor(){
      super();
      this.state={
          show: true,
      }
  }
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
          <button className="navbar-toggler border border-info text-info" 
          onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                   {this.state.show ? <MenuIcon /> : <CloseIcon />}
          </button>

              <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                      <a className="nav-link text-light" href="#">HOME</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-light" href="#">SERVICES</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-light" href="#">ABOUT US</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-light" href="#">CONTACT US</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

    )

}

}

export default Navbar;
