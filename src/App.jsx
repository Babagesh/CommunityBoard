import './App.css'
import Card from './Card'
import awningImg from './assets/awning.png'
import TastyTakeover from './assets/TastyTakeover.jpg'
import ALaCart from './assets/ALaCart.jpg'
import CamelTowTacos from './assets/CamelTowTacos.JPG'
import SwedeDish from './assets/SwedeDish.jpg'

export default function App() {
  return (
    <div className = "App">
      
      <img src={awningImg} alt="Food Truck Awning" id = "awning"/>
      <h1>Food Truck Favorites!</h1>

      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-md">
            <Card image = {TastyTakeover} name = "Tasty Takeover" style = "burgers"/>
          </div>
          <div className = "col-md">
            <Card image = {ALaCart} name = "A La Cart" style = "street food"/>
          </div>
          <div className = "col-md">
            <Card image = {CamelTowTacos} name = "CamelTowTacos" style = "tacos"/>
          </div>
          <div className = "col-md">
            <Card image = {SwedeDish} name = "Swede Dish" style = "swedish food"/>
          </div>
        </div>
        <div className = "row">
            <div className = "col-md">

            </div>
        </div>
      </div>
    </div>
  );
}