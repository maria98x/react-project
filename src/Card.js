

function Card(props) {
    return(<div> 
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://www.wjhl.com/wp-content/uploads/sites/98/2020/08/Zach-Irby.jpg?w=1280&h=719&crop=1" alt="product"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p><button className="btn btn-secondary ">More</button></p>
  </div>
</div>

    </div>)
}

export default Card;