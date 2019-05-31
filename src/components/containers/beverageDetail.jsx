import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import { connect } from "react-redux";
import {fetchAccesstoken} from '../../redux/action';

class BeverageDetailComponent extends Component {
   
    onClickBeverage =(id)=>{
        if(id=="cold"){
            this.props.history.push("/listpage");
        }
       else if(id=="hot"){
        this.props.history.push("/listpage");
        }
    }

    componentDidMount(){
        this.props.fetchAccesstoken();
    }

    render() { 
        return ( <React.Fragment><div className="productWrapper"  onClick={()=>this.onClickBeverage("hot")}>
        <img src="/assests/HotBeverage.jpg" height="300" width="400"/>
        <b><center>Hot Breverage</center></b>
    </div>
    <div className="productWrapper"  onClick={()=>this.onClickBeverage("cold")}>
        <img src="/assests/ColdBeverage.png" height="300" width="400"/>
        <b><center>COLD Breverage</center></b>
    </div>
    </React.Fragment>  );
    }
}
 
export default connect(null,{fetchAccesstoken})(BeverageDetailComponent);