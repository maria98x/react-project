import React, { Component } from "react";
import css from './App.module.css';
class Contact extends Component {
  render() {
    return (
      <div className={css.content}>
 {/*Section: Contact v.2*/}
<section >
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row">
    {/*Grid column*/}
  
    <div className="col text-center">
      <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x" />
          <p>San Francisco, CA 94126, USA</p>
        </li>
        <li><i className="fas fa-phone mt-4 fa-2x" />
          <p>+ 01 234 567 89</p>
        </li>
        <li><i className="fas fa-envelope mt-4 fa-2x" />
          <p>contact@mdbootstrap.com</p>
        </li>
      </ul>
    </div>
  </div>
</section>

      </div>
    );
  }
}
 
export default Contact;