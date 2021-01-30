import React, { Component } from "react";
import "./App.css";

class SingleCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.sumPrice = this.sumPrice.bind(this);
  }
  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }
  render() {
    var values = this.props.data.map((d, i) => {
      return (
        <MapCard
          key={i}
          title={d.title}
          desc={d.desc}
          img={d.img}
          btn={d.btnName}
          price={d.price}
          active={d.active}
          sumPrice={this.sumPrice}
        />
      );
    });
    return (
      <>
        <h1>Product Adding {this.state.total}</h1>
        <br />
        {values}
      </>
    );
  }
}

class MapCard extends Component {
  clickPro() {
    document.querySelector("a").innerHTML = "Added";
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.clickPro = this.clickPro.bind(this);
  }
  render() {
    return (
      <>
        <div className="card container" style={{ width: "18rem" }}>
          <img src={this.props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
            <p className="card-text">{this.props.price}</p>
            <a href="#" className="btn btn-primary" onClick={this.clickPro}>
              {this.props.btn}
            </a>
          </div>
        </div>
      </>
    );
  }
}

function App() {
  const data = [
    {
      title: "this is demo cart title",
      desc: "this is demo cart description",
      img: "https://picsum.photos/200/150",
      price: 150,
      btnName: "Add to Cart",
      qty: 1,
    },
  ];
  return (
    <div className="App">
      <SingleCart data={data} />
    </div>
  );
}

export default App;
