import React, { FC } from 'react';

interface IHeadingProps {
  children: string;
}

export const Heading: FC<IHeadingProps> = (props) => {
  return <h1 className='pb-5 text text_type_main-large'>{props.children}</h1>;
};

export default Heading;
