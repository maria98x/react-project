import React, { Component } from "react";
import css from './App.module.css';
class Home extends Component {
  render() {
    return (
      <div className={css.content} style ={
        {backgroundImage: "url('https://www.wjhl.com/wp-content/uploads/sites/98/2020/08/Zach-Irby.jpg?w=1280&h=719&crop=1')"
      ,backgroundSize: "cover"}}>
 <div className={css.transBack} style={{padding:"30px"}}> 
        <h2 style ={{marginBottom: "100px", paddingTop:"30px"}}>
          Welcome</h2>
       
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
       <p >Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
     
       </div>
      </div>
    );
  }
}
 
export default Home;