import React from "react";
import "./Product.css";

class Product extends React.Component {

    StyleCompleted(){
        return{
            background: this.props.product.stock ? "#7f00b2" : "gray",
        }
    }

    render() {
        const {product} = this.props;

        return <div className="cont-card">
            <div className="card">
                <div className="card-body">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h1>${product.price}</h1>
                    <div style={this.StyleCompleted()} className="btn">{product.stock ? "En Stock" : "Sin Stock"}</div>
                </div>
            </div>
        </div>
    }
}

export default Product;