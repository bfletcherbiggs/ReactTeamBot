import * as types from '../Constants/ActionTypes';
import initialState from './InitialState';

export default function fuelSavingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_TEAM:
      return {
        ...state,
        dateModified: action.dateModified,
        team: action.settings
      };
    case types.CREATE_TEAM:
      return {
        ...state,
        team: action.payload,
        dateModified: action.dateModified
      };
    default:
      return state;
  }
}
