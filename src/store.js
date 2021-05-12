import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { courseReducer, singleCourseReducer } from './reducers/courseReducers';


const initialState = { listCourses: []};

const reducer = combineReducers({
    listCourses: courseReducer,
    singleCourse: singleCourseReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;