export const PersonActions = {
    "SET": "SET"
};


export const personReducer = (state = [], action) => {
    switch (action.type) {
        case PersonActions.SET:
            return action.payload;
        default:
            return state;
    }
};