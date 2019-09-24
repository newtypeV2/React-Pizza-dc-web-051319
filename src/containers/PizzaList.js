import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  getAllPizzas = () => {
    return this.props.pizzaArray.map(pizzaObj => <Pizza pizzaData={pizzaObj} selectPizza={this.props.selectPizza} key={pizzaObj.id}/>)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.getAllPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
