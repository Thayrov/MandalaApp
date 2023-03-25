import { REALTIME_DB_URL } from '../../constants/firebase/index';
import { cartTypes } from '../types';

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id,
});

export const confirmOrder = (items, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${REALTIME_DB_URL}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items,
                    total,
                }),
            });
            const result = await response.json();
            dispatch({
                type: CONFIRM_ORDER,
                result,
            });
        } catch (error) {
            dispatch({
                type: CONFIRM_ORDER,
                error,
            });
        }
    };
};
