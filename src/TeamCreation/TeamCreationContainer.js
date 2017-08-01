import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './TeamCreationActions';

import './TeamCreationStyle.scss';
import TeamTable from './TeamCreationTable';
import Button from '../Components/Button';

const TeamCreationContainer = (props) => {
  return (
    <div className="team-creation-container">
      <Button
        value="Create Team"
        clickHandler={props.actions.createTeam}
        className="create-button"
      />
      <TeamTable teamData={props.team} />
    </div>
  );
};

TeamCreationContainer.propTypes = {
  team: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    createTeam: PropTypes.func
  })
};

const mapStateToProps = (state) => {
  return {
    team: state.teamData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreationContainer);
