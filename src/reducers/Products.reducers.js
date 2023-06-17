import iphone12 from '../images/iphone12.webp';
import pizza from '../images/cheese-pizza.jpg';
import pasta from '../images/pasta.jpeg';
import ipad from '../images/ipad.webp';


let initialStete = {
    products: [
        {
            category: "ELECTRONICS",
            name: "iPhone 12 ",
            description: "iPhone 12 pushes everything forward with A14 Bionic, the fastest chip in a smartphone. A new dual-camera system. And a beautiful Super Retina XDR display, so you can see everything in vivid detail.",
            price: "JD 559",
            img: iphone12,
            inventoryCount: "10",

        },
        {
            category: "ELECTRONICS",
            name: "iPad (10th generation)",
            description: "Lovable. Drawable. Magical. Colorfully reimagined and more versatile than ever. With an all-screen design, 10.9-inch Liquid Retina display,1 and four gorgeous colors. iPad delivers a powerful way to create, stay connected, and get things done.",
            price: "JD 425",
            img: ipad,
            inventoryCount: "15",

        },
        // {
        //     category:"ELECTRONICS",
        //     name: "iPhone 12 ",
        //     description: "iPhone 12 pushes everything forward with A14 Bionic, the fastest chip in a smartphone. A new dual-camera system. And a beautiful Super Retina XDR display, so you can see everything in vivid detail.",
        //     price: "JD 559",
        //     img:iphone12,
        //     inventoryCount:"10",

        // },
        {
            category: "FOOD",
            name: "Pizza",
            description: "A slice of classic cheese pizza is one of life's greatest pleasures",
            price: "30$",
            img: pizza,
            inventoryCount: "13",
        },
        {
            category: "FOOD",
            name: "pasta",
            description: "Be sure to buy a good-quality feta for this recipe, particularly because it’s the main ingredient and flavor of the dish. We suggest using a medium or firm Greek feta made only from sheep’s milk. Feta made from cow’s milk tends to be crumblier and more sour.",
            price: "20$",
            img: pasta,
            inventoryCount: "18",
        }
    ]

}

export default function productsReducer(state = initialStete, action) {
    const { type, payload } = action;

    switch (type) {
        case "ACTIVE":
            let product = state.products.filter(item => {
                if (item.category == payload) {
                    return item.category;
                }
            });
            console.log("products", product);
            // console.log("state", { ...state, product});

            return { ...state, product };

        default:
            return initialStete;

    }

}