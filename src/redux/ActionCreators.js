import * as AtionTypes from './ActionType';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: AtionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000)
}

export const dishesLoading = () => ({
    type: AtionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: AtionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: AtionTypes.ADD_DISHES,
    payload: dishes
})