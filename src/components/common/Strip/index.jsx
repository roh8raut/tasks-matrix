import React from 'react';
import { node } from 'prop-types';

const Strip = ({ children }) => <div>{children}</div>;

Strip.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: node
};

export default Strip;
