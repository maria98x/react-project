import React, { Component } from "react";
import css from './App.module.css';
class Team extends Component {
  render() {
    return (
      <div className={css.content}>
  <div>
  <h2 style={{textAlign: 'center'}}>Our Team</h2>
  <div className="row">
    <div className="col">
      <div className="card">
        <img src="https://www.wjhl.com/wp-content/uploads/sites/98/2020/08/Zach-Irby.jpg?w=1280&h=719&crop=1" alt="Jane" style={{width: '100%'}} />
        <div className="container">
          <h2>Jane Doe</h2>
          <p className="title">CEO &amp; Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button className="btn btn-secondary">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img  src="https://www.wjhl.com/wp-content/uploads/sites/98/2020/08/Zach-Irby.jpg?w=1280&h=719&crop=1" alt="Mike" style={{width: '100%'}} />
        <div className="container">
          <h2>Mike Ross</h2>
          <p className="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button className="btn btn-secondary">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img  src="https://www.wjhl.com/wp-content/uploads/sites/98/2020/08/Zach-Irby.jpg?w=1280&h=719&crop=1" alt="John" style={{width: '100%'}} />
        <div className="container">
          <h2>John Doe</h2>
          <p className="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button className="btn btn-secondary">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}
 
export default Team;