import PropTypes from 'prop-types';
import React from 'react';

export default function Heading(props) {
  return <h1 className='pb-5 text text_type_main-large'>{props.children}</h1>;
}

Heading.propTypes = {
  children: PropTypes.any,
};
