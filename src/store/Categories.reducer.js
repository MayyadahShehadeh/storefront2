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
            state.activeCategory = payload;
            console.log("active category>>>>",payload);

            return {...state}


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