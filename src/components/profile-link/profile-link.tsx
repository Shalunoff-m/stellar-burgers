import React, { FC, ReactNode } from 'react';
import styles from './profile-link.module.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface IProfileLinkProps {
  children: ReactNode;
  to: string;
  props: any;
}

type classNameProps = {
  isActive: boolean;
  isPending: boolean;
};

const ProfileLink: FC<IProfileLinkProps> = ({ children, to, ...props }) => {
  const activeClass = ({ isActive }: classNameProps) => {
    if (isActive) {
      return classNames(
        'text',
        'text_type_main-medium',
        styles.activeLink,
        'pt-4',
        'pb-4'
      );
    } else {
      return classNames(
        'text',
        'text_type_main-medium',
        styles.link,
        'pt-4',
        'pb-4'
      );
    }
  };

  return (
    <NavLink className={activeClass} to={to} {...props}>
      {children}
    </NavLink>
  );
};

export { ProfileLink };
