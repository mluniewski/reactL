import axios from '../../axios-orders';
import {put} from "redux-saga/effects";
import * as actions from '../actions';


export function* initIngredientsSaga (action) {
    try {
        const resposne = yield axios.get(
         'https://react-burger-4b76b.firebaseio.com/ingredietns.json')
        yield put(actions.setIngredietns(resposne.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
}