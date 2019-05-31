import React, { Component } from 'react';
import{Link, withRouter, }from "react-router-dom";
import { connect } from "react-redux";
import {getProducts} from '../../../redux/action';
import './product.css';

class ProductComponent extends Component {

    onClickProduct = (id) =>{
        this.props.getProducts(this.props.token,id);
        setTimeout(()=>{
            this.props.history.push(`/detailpage/${id}`);
        },1000);
        
    }
   
    render() { 
        return (<div className="productWrapper" onClick={()=>this.onClickProduct(this.props.skuid)}>
            <img src={this.props.imgsrc} alt=""/>
            <p className="product-name">{this.props.details}</p>
            <p className="instock-product"><i className="fas fa-check"></i> In Stock</p> 
        </div> );
    }
}
 
export default connect(null,{getProducts})(withRouter(ProductComponent));