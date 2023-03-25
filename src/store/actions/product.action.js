import { productTypes } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCT } = productTypes;
export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productID: id,
});

export const filterProduct = (id) => ({
    type: FILTER_PRODUCT,
    categoryID: id,
});
