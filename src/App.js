import React from 'react';
import './App.css';
import { ProductList } from './Components/productList';
import Catalogue from "./Components/Catalogue/Catalogue";


class App extends React.Component{

  state={
    products: ProductList,
    isChecked: false
  }

  productInStock = this.state.products.filter( prod => prod.stock === true);
  sortByStock = [...this.state.products].sort((x, y) => y.stock - x.stock);

  checkStock= ()=>{
    this.setState({isChecked: !this.state.isChecked})
  }

  render(){
    return (
      <div className="container">
        <input type="checkbox" onChange={this.checkStock} /> Mostrar solo stock disponible
        <div className="row">
        {this.state.isChecked ? <Catalogue products={this.productInStock} /> : <Catalogue products={this.sortByStock} />}
      </div>
      </div>
    );
    
  }
}

export default App;
