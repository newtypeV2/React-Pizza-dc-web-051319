import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizzaData.topping}</td>
      <td>{props.pizzaData.size}</td>
      <td>{props.pizzaData.vegetarian.toString()}</td>
      <td><button type="button" className="btn btn-primary" onClick={()=> props.selectPizza(props.pizzaData)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
