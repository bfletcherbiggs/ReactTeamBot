import * as ActionTypes from '../Constants/ActionTypes';
import reducer from './TeamCreationReducer';
import {getFormattedDateTime} from '../utils/DateHelper';

describe('Reducers::TeamCreationReducer', () => {
  const getInitialState = () => {
    return {
      team: [],
      dateModified: ''
    };
  };

  const getAppState = () => {
    return {
        team: [{
          name: 'huuu2062',
          speed: 23,
          strength: 12,
          score: 35,
          starter: 1
        }]
    };
  };
  const dateModified = getFormattedDateTime();

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SAVE_TEAM', () => {
    const action = { type: ActionTypes.SAVE_TEAM, dateModified, settings: getAppState().team };
    const expected = Object.assign(getAppState(), { dateModified });

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle CREATE_TEAM', () => {
    const action = { type: ActionTypes.CREATE_TEAM, dateModified, payload: getAppState().team };

    const expectedSpeed = 23;
    const expectedStrength = 12;

    expect(reducer(getAppState(), action).team[0].speed).toEqual(expectedSpeed);
    expect(reducer(getAppState(), action).team[0].strength).toEqual(expectedStrength);
  });
});
