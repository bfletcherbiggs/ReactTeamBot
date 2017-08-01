import { combineReducers } from 'redux';
import teamData from './TeamCreation/TeamCreationReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  teamData,
  routing: routerReducer
});

export default rootReducer;
