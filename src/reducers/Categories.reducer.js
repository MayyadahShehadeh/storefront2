let initialStete = {
    categories: [
        {
            name: "ELECTRONICS",
            displayName: "ELECTRONICS",
            description: "Show All Electronics "
        },

        {
            name: "FOOD",
            displayName: "FOOD",
            description: "Showw All Foods"
        }
    ],
    activeCategory: "",

}

// reducer
export default (state = initialStete, action) => {
    let { type, payload } = action;

    switch (type) {
        case "ACTIVE":
            let category = state.categories;
            
            let activeCateg = payload;
            console.log("active category>>>>",activeCateg);

            return { category, activeCategory: activeCateg };

        case "RESET":
            return initialStete;
        default:
            return state;
    }

}

// actions 
// can use same actions for another reducer 
export const activeCategory = (name) => {
    return {
        type: "ACTIVE",
        payload: name
    }
}

export const reset = () => {
    return {
        type: "RESET",
    };
};