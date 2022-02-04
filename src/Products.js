import React, { Component } from "react";
import css from './App.module.css';
import Card from './Card'
class Products extends Component {
  render() {
    return (
      <div className={css.content}>
        <h2>Our products</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <div className="row">
          <div className="col my-2"> <Card /> </div>
          <div className="col my-2"> <Card /> </div>
          <div className="col my-2"> <Card /> </div>
          <div className="col my-2"> <Card /> </div>
         
       

        </div>
  
      </div>
    );
  }
}
 
export default Products;