import { PRODUCTS } from '../../constants/data/products';
import { productTypes } from '../types';

const { FILTER_PRODUCT, SELECT_PRODUCT } = productTypes;

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT: {
            return {
                ...state,
                selected: state.products.find((product) => product.id === action.productID),
            };
        }
        case FILTER_PRODUCT: {
            return {
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryID
                ),
            };
        }
        default:
            return state;
    }
};

export default productReducer;
