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
    <div className="App">
      <img src={awningImg} alt="Food Truck Awning" id="awning"/>
      <h1>Food Truck Favorites!</h1>

      <div className="container-fluid">

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={TastyTakeover} name="Tasty Takeover" style="Burgers" url="http://www.tastytakeover.com/"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={ALaCart} name="A La Cart" style="Street food" url="https://www.alacartorlando.com/"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={CamelTowTacos} name="CamelTowTacos" style="Tacos" url="https://www.cameltowtacos.com/menu"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={SwedeDish} name="Swede Dish" style="Swedish" url="https://swededishtruck.com/our-menu"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={Venezuelan} name="Venezuelan Food Truck" style="Venezuelan" url="https://maps.app.goo.gl/uo5oUwaCgJAGMyq48"/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={EatNWash} name="Eat N Wash" style="Sea food" url="https://www.google.com/maps/place/Eat+N+Wash/"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={Importado} name="El importado" style="Mexican burgers" url="https://order.toasttab.com/online/el-importado-whisper-lakes-orlando"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={Tonel} name="Tonel Caribbean" style="Caribbean" url="https://www.yelp.com/menu/tonel-caribbean-brookl"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={Arepas} name="Arepas Santa Barbara la Original" style="Venezuelan" url="https://www.google.com/maps/place/"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg">
            <Card image={BemBom} name="Bem Bom" style="Portuguese" url="https://www.google.com/maps/place/Bem+Bom+Food+Truck/"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}