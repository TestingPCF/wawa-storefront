import * as actions from "./actions";
import Axios from 'axios';
import './mock';


export const fetchAccesstoken=()=>(dispatch)=>{
        Axios({
            method: 'post',
            url: 'http://ffz-sandbox-2.epdemos.com/cortex/oauth2/tokens?scope=wawastore&role=PUBLIC&grant_type=password',
            data: {
            },
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(res=>{
            //console.log("dfgfbgdbdd11111",res.data.access_token)
            dispatch({type:actions.GET_ACCESSTOKEN,value:res.data})
        });
    }


export const getProducts=(accessToken,skuid)=>(dispatch)=>{
    console.log("check SkuID",skuid)
    Axios({
        method: 'post',
        url: 'http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/lookups/form?zoom=price,definition:components:element,definition:components:element:components:element,recommendations:accessory:element:code&followlocation',
        data: {
            "code" : skuid
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
        console.log("GET_PRODUCTS",response)
        dispatch({type:actions.GET_PRODUCTS,value:response.data})
    });


    /*Axios.get("https://pocdemo-f7606.firebaseio.com/products.json").then(response=>{
        console.log(1);
        console.log(response.data);
        dispatch({type:actions.GET_PRODUCTS,value:response.data})
    });*/
}