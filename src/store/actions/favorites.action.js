import { favoritesTypes } from '../types';

const { ADD_TO_FAVS, REMOVE_FROM_FAVS } = favoritesTypes;

export const addToFavs = (item) => ({
    type: ADD_TO_FAVS,
    item,
});

export const removeFromFavs = (id) => ({
    type: REMOVE_FROM_FAVS,
    id,
});
