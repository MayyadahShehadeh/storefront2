import superagent from "superagent";

export const addProduct = (productName) => {
    return {
        type: "ADDPRODUCT",
        payload: productName,
    };
};

export const deleteProduct = (product,id) => {
  return {
    type: "DELETE",
    payload: {
      product:product,
      id:id
    },
  };
};

export const getAction = payload => {
  return {
    type: 'GET',
    payload:payload
  }
}

const apiUrl = 'http://localhost:3003/api/v1/foood';


export const getData =  () => 
(dispatch , state) =>{

  return superagent.get(apiUrl).then( result => {
    console.log('result.body',result.body);
    dispatch(getAction(result.body))
  })

}
  