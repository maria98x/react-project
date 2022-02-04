
import React, { Component } from 'react';
import css from './App.module.css';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
       <div>
           <nav className={css.purple}>
          <ul style={{textAlign:"center", margin: "0"}}>
            <li className={css.li}><Link className={css.a} to="/Home">Home</Link></li>
            <li className={css.li}><Link className={css.a} to="/Products">Products</Link></li>
            <li className={css.li}><Link className={css.a} to="/About">About us</Link></li>
            <li className={css.li}><Link className={css.a} to="/contact">Contact us</Link></li>
            <li className={css.li}><Link className={css.a} to="/Team">Team</Link></li>
          </ul>
          <div className="content">
             
          </div> </nav>
         

  </div>
    

          );
    }
}

export default Nav;