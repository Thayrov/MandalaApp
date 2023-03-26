import { favoritesTypes } from '../types';

const { ADD_TO_FAVS, REMOVE_FROM_FAVS } = favoritesTypes;

const initialState = {
    items: [],
};

const favsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVS:
            let updatedFavs = [];
            if (state.items.find((item) => item.id === action.item.id)) {
                updatedFavs = state.items.map((item) => {
                    if (item.id === action.item.id) item.quantity += 1;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1 };
                updatedFavs = [...state.items, item];
            }
            return {
                ...state,
                items: updatedFavs,
            };
        case REMOVE_FROM_FAVS:
            const filteredFavs = state.items.filter((item) => item.id !== action.id);
            return {
                ...state,
                items: filteredFavs,
            };
        default:
            return state;
    }
};

export default favsReducer;
