import React from 'react';
import PropTypes from 'prop-types';

const List = ({ task }) => {
  return <div>{task || 'dummystring'}</div>;
};

List.propTypes = {};

export default List;
