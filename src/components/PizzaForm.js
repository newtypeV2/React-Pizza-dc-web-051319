import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" data-name="topping" onChange={props.onChangeHandler} value={props.pizzaData.topping} />
        </div>
        <div className="col">
          <select className="form-control" onChange={props.onChangeHandler} data-name="size" value={props.pizzaData.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaData.vegetarian} data-name="vegetarian" onChange={props.onChangeCheckboxHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizzaData.vegetarian} data-name="vegetarian" onChange={props.onChangeCheckboxHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onSubmitHandler}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
