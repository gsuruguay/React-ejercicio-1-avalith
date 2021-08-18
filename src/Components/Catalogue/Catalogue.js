import React from "react";
import Product from "../Product/Product";

class Catalogue extends React.Component{
    render(){
        return this.props.products.map(product => <Product product={product}/> )
    }
}

export default Catalogue;