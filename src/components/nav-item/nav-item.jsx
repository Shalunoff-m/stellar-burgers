import PropTypes from 'prop-types';
import React from 'react';
import styles from './nav-item.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export function NavItem(props) {
  const { Icon, to, children } = props;

  return (
    <NavLink to={to} className={`${styles.navItem} m-6 ml-5 mr-5`}>
      {({ isActive }) => (
        <>
          <Icon type={isActive ? 'primary' : 'secondary'} />
          <p
            className={
              isActive
                ? classNames(
                    styles.activeLink,
                    'p-2',
                    'text',
                    'text_type_main-default'
                  )
                : classNames(
                    styles.link,
                    'p-2',
                    'text',
                    'text_type_main-default'
                  )
            }
          >
            {children}
          </p>
        </>
      )}
    </NavLink>
  );
}

NavItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  children: PropTypes.node,
  // type: PropTypes.string.isRequired,
};
