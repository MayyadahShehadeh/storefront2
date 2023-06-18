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