import './App.css'
import Card from './Card'
import awningImg from './assets/awning.png'
import TastyTakeover from './assets/TastyTakeover.jpg'
import ALaCart from './assets/ALaCart.jpg'
import CamelTowTacos from './assets/CamelTowTacos.JPG'
import SwedeDish from './assets/SwedeDish.jpg'
import EatNWash from './assets/EatNWash.jpeg'
import Importado from './assets/Importado.jpg'
import Tonel from './assets/TonelCaribbean.jpg'
import Arepas from './assets/Arepas.jpg'
import Venezuelan from './assets/Venezuelan.jpg'
import BemBom from './assets/Bem Bom.jpg'

export default function App() {
  return (
    <div className = "App">

      <img src={awningImg} alt="Food Truck Awning" id = "awning"/>
      <h1>Food Truck Favorites!</h1>

      <div className = "container-fluid">
        <div className = "row">
          <div className = "col">
            <Card image = {TastyTakeover} name = "Tasty Takeover" style = "Burgers"/>
          </div>
          <div className = "col">
            <Card image = {ALaCart} name = "A La Cart" style = "Street food"/>
          </div>
          <div className = "col">
            <Card image = {CamelTowTacos} name = "CamelTowTacos" style = "Tacos"/>
          </div>
          <div className = "col">
            <Card image = {SwedeDish} name = "Swede Dish" style = "Swedish"/>
          </div>

          <div className = "col">
            <Card image = {Venezuelan} name = "Venezuelan Food Truck" style = "Venezuelan"/>
          </div>
        </div>
        <div className = "row">
            <div className = "col">
              <Card image = {EatNWash} name = "Eat N Wash" style = "Sea food"/>
            </div>
             <div className = "col">
              <Card image = {Importado} name = "El importado" style = "Mexican"/>
            </div>
             <div className = "col">
              <Card image = {Tonel} name = "Tonel Caribbean" style = "Caribbean"/>
            </div>
             <div className = "col">
              <Card image = {Arepas} name = "Arepas Santa Barbara la Original" style = "Venezuelan"/>
            </div>
            <div className = "col">
              <Card image = {BemBom} name = "Bem Bom" style = "Portuguese"/>
            </div>
              
        </div>
      </div>
    </div>
  );
}