import { products } from '../Data';
import ActionConsts from './ActionConsts';

const productsInBasket = [];

export default function reducer(state = productsInBasket, action) {
    if (action.type === ActionConsts.addGoodToCart){
        const product = products.find(item =>
            item.id === action.payload.id);
        const cart = [...state, product];
        return cart;
    }
    if (action.type === ActionConsts.deleteGoodFrom){
        return state.filter((e) => {
            return e.id !== action.payload.id
        });
    }
    return state;
}