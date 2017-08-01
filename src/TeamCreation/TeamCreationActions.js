import * as types from '../Constants/ActionTypes';
import helper from '../utils/TeamHelper';
import {getFormattedDateTime} from '../utils/DateHelper';

export const saveTeam = (settings) => {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_TEAM,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
};

export const createTeam = () => (dispatch) =>  {
  return dispatch(updateTeam(helper.newTeam()));
};

export const updateTeam = (payload) =>
  ({
    type: types.CREATE_TEAM,
    dateModified: getFormattedDateTime(),
    payload: payload
  })
