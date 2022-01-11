import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';

const Breadcrumb = props => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <Breadcrumbs aria-label="breadcrumb">
        {/* {data.map((item, index) => (
          <span key={index}>
            {item.isActive ? (
              <Typography color="textPrimary">{item.title}</Typography>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </span>
        ))} */}

        <Link href="/">Home</Link>
        <Link href="/help-center">Help Center</Link>
        <Typography color="textPrimary">{props.url}</Typography>
      </Breadcrumbs>
    </div>
  );
};

Breadcrumb.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Breadcrumb;
