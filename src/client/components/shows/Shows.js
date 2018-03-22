import React from 'react';

import Calendar from './Calendar';

const Shows = (props) => {
  return (
    <div>
      <h2>This is shows page.</h2>
      <Calendar shows={props.shows} />
    </div>
  );
};

export default Shows;
