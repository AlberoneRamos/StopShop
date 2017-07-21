import productsReducer from './productsReducer';
import commentsReducer from './commentsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    products:productsReducer,
    comments:commentsReducer
});
