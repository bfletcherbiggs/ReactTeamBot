import React from 'react';
import PropTypes from 'prop-types';
import { Column, Table, AutoSizer } from 'react-virtualized';

const TeamTable = ({ teamData }) => {
  const data = teamData.team;

  const teamDataCreated = () => {
    return (
      <AutoSizer>
        {({ width, height }) =>
            (<Table
              width={width}
              height={height}
              headerHeight={50}
              rowHeight={50}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
            >
              <Column
                width={200}
                cellRenderer={({ rowIndex }) => rowIndex + 1}
                dataKey="index"
                label="#"
              />
              <Column width={200} label="Player" dataKey="name" />
              <Column width={200} label="Speed" dataKey="speed" />
              <Column width={200} label="Strength" dataKey="strength" />
              <Column width={200} label="Score" dataKey="score" />
              <Column width={200} label="Starter" dataKey="starter" />
            </Table>)}
      </AutoSizer>
    );
  };

  return (
    <div className="fixed-table-wrapper">
      {!data
        ? <div>No Team Exists - Please Create Team</div>
        : teamDataCreated()}
    </div>
  );
};


TeamTable.propTypes = {
  teamData: PropTypes.shape({}).isRequired
};

export default TeamTable;
