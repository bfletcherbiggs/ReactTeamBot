import * as ActionTypes from '../Constants/ActionTypes';
import * as ActionCreators from './TeamCreationActions';

import MockDate from 'mockdate';

import {getFormattedDateTime} from '../utils/DateHelper';

describe('Actions', () => {
  let dateModified;
  beforeAll(() => {
    MockDate.set(new Date());
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  const appState = {
    team: []
  };

  it('should create an action to save team', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SAVE_TEAM,
      dateModified,
      settings: appState
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveTeam(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveTeam(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to create team settings', () => {
    const actual = ActionCreators.updateTeam(appState);
    const expected = {
      type: ActionTypes.CREATE_TEAM,
      dateModified,
      payload: appState
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});
