import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super();
    this.state = {
      pizzas : [],
      selectedPizza : {topping : "", size: "", vegetarian : ""}
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/pizzas")
    .then(res => res.json())
    .then(pizzaObj => this.setState({
      pizzas : pizzaObj
    }));
  }

  selectPizza = (pizza) => {
    this.setState({
      selectedPizza : pizza,
      x : pizza.topping
    })
  }

  testState = (e) => {
    this.setState({
      x : e.target.value 
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      selectedPizza : {...this.state.selectedPizza,[e.currentTarget.dataset.name] : e.currentTarget.value}
    })
  }

  onChangeCheckboxHandler = (e) => {
    let vegetarianUpdate = e.currentTarget.value === "Vegetarian" ? true : false;
    this.setState({
      selectedPizza : {...this.state.selectedPizza, vegetarian : vegetarianUpdate}
    })
  }

  updateArray = (pizza) => {
    this.setState({
      pizzas : this.state.pizzas.map(piz => piz.id === pizza.id ? pizza : piz),
      selectedPizza : {topping : "", size: "", vegetarian : ""}
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      topping : this.state.selectedPizza.topping,
      size : this.state.selectedPizza.size,
      vegetarian : this.state.selectedPizza.vegetarian
    }
    fetch("http://localhost:4000/pizzas/"+this.state.selectedPizza.id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(pizza => {
      this.updateArray(pizza);
    });
  }

  patchPizza = (pizza) => {
    console.log("Attempting to patch",pizza)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizzaData={this.state.selectedPizza} 
          patchPizza={this.patchPizza} 
          onChangeHandler={this.onChangeHandler} 
          onChangeCheckboxHandler={this.onChangeCheckboxHandler} 
          onSubmitHandler={this.onSubmitHandler}
        />
        <PizzaList 
          pizzaArray={this.state.pizzas} 
          selectPizza={this.selectPizza}
        />
      </Fragment>
    );
  }
}

export default App;
