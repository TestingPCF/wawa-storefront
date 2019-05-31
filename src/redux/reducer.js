import * as actions from "./actions";

const initState = {
    "accessToken":"",
    "productsArr":[{
        "name":"Macchiatos",
        "skuId": "bundle_caramel_macchiatos_sku",
        "src": "http://localhost:3000/assests/Macchiatos.jpg"
    }, {
        "name":"Macchiatos",
        "skuId": "bundle_mocha_macchiatos_sku",
        "src": "http://localhost:3000/assests/Mocha.jpg"
    }],
    "productDetails":[]
    
  };
  const productReducer = (state=initState,action)=>{
    switch(action.type)
        {
            case actions.GET_ACCESSTOKEN: return {
                    ...state,
                    accessToken: action.value.access_token
                  }
            case actions.GET_PRODUCTS: return {
                ...state,
                productDetails:action.value
            }
            default : return {
                ...state
            }

        }

  }

  export default productReducer;