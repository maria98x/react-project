import React, { Component } from "react";
import css from './App.module.css';
class About extends Component {
  render() {
    return (
      <div className={css.content}>
  <div className={css.content}>
    <h2 className={css.myPadding}>About Company Page</h2>
    <h4 className={css.myPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
    <p  className={css.myPadding}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <button className="btn btn-secondary btn-lg">Get in Touch</button> <br></br><br></br><br></br>
    </div>

      </div>
    );
  }
}
 
export default About;