import React, { Component } from 'react';
import{withRouter }from "react-router-dom";
import { connect } from "react-redux";
import fb from '../../../assests/fb.png';
import twitter from '../../../assests/twitter.png';
import pin from '../../../assests/pin.png';
import mail from '../../../assests/mail.png';
import hotBeverage from '../../../assests/HotBeverage.jpg';


class ProductDetailPageComponent extends Component {


constructor(props)
{
    super(props);
    if(!this.props.accessToken)
    {
        this.props.history.push("/beverage");
        window.location.reload();
    }

    if(this.props.productDetails){
        const prdDetails = this.props.productDetails;
        console.log(prdDetails);
        
        const prdComponentElement = prdDetails['_definition'][0]['_components'][0]['_element'];
        const prdtype =  prdComponentElement[1]['_components'] ? prdComponentElement[1]['_components'][0]['_element'] : false;
        const prdQty =  prdComponentElement[2]['_components'] ? prdComponentElement[2]['_components'][0]['_element'] : false;
        const price = ( prdDetails ? prdDetails._price[0]['purchase-price'][0]['display'] : "$0.0");
        const productName = (prdComponentElement[0]['display-name']);

        this.state = {
            price: price,
            prdName :productName,
            productType:prdtype,
            productQty:prdQty,
            qty:1
        }
    }
    
}


onMinusHandler = () =>{
    this.setState({qty:(this.state.qty<=1 ? this.state.qty : this.state.qty-1)});

    
}

onPlusHandler = () =>{
    this.setState({qty:this.state.qty+1});

  
}

    render() { 
      let pathname=this.props.history.location.pathname;
      let skuId=pathname.split('/');
      skuId=skuId[2];
      let filterName = this.props.products.filter((item)=>{
            return item.skuId == skuId
      });

    

      if(!this.props.productDetails){
            return null
      }

      const productItems = this.state.productType.map( (item,i)=> {
            return  <li><a href="" className={i==0 ? 'active':''}>{item['details'][0]['value']}</a></li>
        });

      const productQty = this.state.productQty.map( (item,i) => {
          return  <li><a href="" className={i==0 ? 'active':''}>{item['details'][0]['value']}</a></li>
        });
     
     
      
        return (<React.Fragment>
         <section  className="page-detail-wrapper">
            <div  className="container">
                <div  className="row">
                    <div  className="col-lg-6">
                        <div  className="product-detail-image">
                            <img src={hotBeverage} alt=""/>
                        </div>
                    </div>
                    <div  className="col-lg-6">
                        <div  className="product-detail-con">
                            <p  className="p-name">{filterName[0].name} - {this.state.prdName}</p>
                            <p  className="p-price">
                                <span  className="new-price">{this.state.price}</span>
                                {/* <span  className="old-price">$3.50</span> */}
                            </p>
                            {/* <p  className="p-name">{this.state.prdName}</p> */}
                            <div  className="quantity-of-product">
                                <label htmlFor="">{this.state.productType[0]['display-name']}</label>
                                <ul  className="quantity-list">
                                    {productItems}
                                </ul>
                            </div>
                            <div  className="quantity-of-product">
                                <label htmlFor="">{this.state.productQty[0]['display-name']}</label>
                                <ul  className="quantity-list">
                                    {productQty}
                                </ul>
                            </div>
                            <div  className="quantity-of-product">
                                <label htmlFor="">Quantity</label>
                                <div  className="quantity-number">
                                    <a href="javascript: void(0)" onClick={() => this.onMinusHandler()}  className="quantity-minus">-</a>
                                        <span  className="product-valume">{this.state.qty}</span>
                                    <a href="javascript: void(0)" onClick={() => this.onPlusHandler()}  className="quantity-plus">+</a>
                                </div>
                            </div>
                            <a href="#"  className="add-to-bag">Add to Bag</a>
                            <a href="#"  className="add-to-wishlist">Add to Wish List</a>
                            <ul  className="social-media-list">
                                <li>
                                    <a href=""><img src={fb} alt=""/></a>
                                </li>
                                <li>
                                    <a href=""><img src={twitter} alt=""/></a>
                                </li>
                                <li>
                                    <a href=""><img src={pin} alt=""/></a>
                                </li>
                                <li>
                                    <a href=""><img src={mail} alt=""/></a>
                                </li>
                            </ul>
                            <div  className="srq">
                                <ul>
                                    <li><a href="javascript: void(0)">Summary</a></li>
                                    <li><a href="javascript: void(0)">Reviews <span>(0)</span></a></li>
                                    <li><a href="javascript: void(0)">Questions <span>(0)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>);
    }
}

const mapStateToProps=(state)=>{
  console.log("31May",state);
  return{
      products: state.productsArr,
      accessToken:state.accessToken,
      productDetails:state.productDetails
  }
}
 
export default connect(mapStateToProps,null)(withRouter(ProductDetailPageComponent));