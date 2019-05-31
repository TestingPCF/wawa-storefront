import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductComponent from "../product/product";

class ProductListPageComponent extends Component {

    // componentWillMount(){
    //     this.props.getProducts(this.props.accessToken,this.props.skuId);
    // }

    componentDidMount(){
      //  console.log("sbcmajsd",this.props.products)
        console.log("acc",this.props.accessToken);
    }

    render() { 
        console.log(this.props.products)
        return ( <React.Fragment>
            {this.props.products ? (this.props.products.map((item,i)=>{
               return <ProductComponent 
                    key={i}
                    imgsrc={item.src}
                    details={item.name}
                    skuid={item.skuId}
                    token={this.props.accessToken}/>
            })):null}
           
            
          </React.Fragment> );
    }
}

const mapStateToProps=(state)=>{
    return{
        accessToken:state.accessToken,
        products: state.productsArr
    }
}
 
export default connect(mapStateToProps,null)(ProductListPageComponent);