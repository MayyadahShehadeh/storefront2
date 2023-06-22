import iphone12 from '../images/iphone-12.jpeg';
import pizza from '../images/cheese-pizza.jpg';
import pasta from '../images/pasta.jpeg';
import ipad from '../images/ipad.webp';

let initialState = {
    products: [
        {
            category: "ELECTRONICS",
            name: "iPhone 12 ",
            description: "iPhone 12 pushes everything forward with A14 Bionic, the fastest chip in a smartphone. A new dual-camera system. And a beautiful Super Retina XDR display, so you can see everything in vivid detail.",
            price: "JD 559",
            img: iphone12,
            inventory: 10,
        },
        {
            category: "ELECTRONICS",
            name: "iPad (10th generation)",
            description: "Lovable. Drawable. Magical. Colorfully reimagined and more versatile than ever. With an all-screen design, 10.9-inch Liquid Retina display,1 and four gorgeous colors. iPad delivers a powerful way to create, stay connected, and get things done.",
            price: "JD 425",
            img: ipad,
            inventory: 15,
        },
        {
            category: "FOOD",
            name: "Pizza",
            description: "A slice of classic cheese pizza is one of life's greatest pleasures",
            price: "30$",
            img: pizza,
            inventory: 13,
        },
        {
            category: "FOOD",
            name: "pasta",
            description: "Be sure to buy a good-quality feta for this recipe, particularly because it’s the main ingredient and flavor of the dish. We suggest using a medium or firm Greek feta made only from sheep’s milk. Feta made from cow’s milk tends to be crumblier and more sour.",
            price: "20$",
            img: pasta,
            inventory: 18,
        }
    ],
    activeProduct: [],
    cart: [],
    count: 0,
    getDataArray:[],
}

export default function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case "GET":
          state.getDataArray = payload
            return state
                   

        case "ACTIVE":
            // ----- date from array 
            let getActivePro = state.products.filter(item => {
                if (item.category == payload) {
                    return item.category;
                }
            });
            // ------- data from backend api 
            let activeData = state.getDataArray.filter(item => {
                if (item.category == payload) {
                    return item.category;
                }
            });
            // --------- add all in one array 
            state.activeProduct = [...activeData,...getActivePro];

            return state



        case "ADDPRODUCT":
            state.activeProduct = state.activeProduct.map((product) => {
                if (product.name === payload.name && product.inventory > 0) {
                    product.inventory = product.inventory - 1;
                    return product;
                }
                return product;
            });

            let cart = [...state.cart, payload];
            console.log('cartt:', cart);
            console.log(' state.activeProduct::', state.activeProduct);
            return { ...state, cart: cart, count: state.count + 1 };



        case "DELETE":
            state.activeProduct = state.activeProduct.map((product) => {
                if (product.name === payload.product.name) {
                    product.inventory = product.inventory + 1;

                    return product;
                }
                return product;
            });
            return {
                ...state,
                cart: state.cart.filter((item, idx) => idx !== payload.id),
                count: state.count - 1
            }


        default:
            return state;

    }

}
