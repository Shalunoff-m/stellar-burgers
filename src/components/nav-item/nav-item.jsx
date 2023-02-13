import PropTypes from 'prop-types';
import React from 'react';
import styles from './nav-item.module.css';

export function NavItem(props) {
  const { Icon, type, children } = props;

  return (
    <div className={`${styles.navItem} m-6 ml-5 mr-5`}>
      <Icon type={type} />
      <p className={`p-2  text text_type_main-default`}>{children}</p>
    </div>
  );
}

NavItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};
