import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";

const styless = makeStyles((theme) => ({
  breadCrum: {
    backgroundColor:"aliceblue",
    padding: "5px",
    position:"relative",
    top:"0px",
    '& ol':{
      marginLeft:"58px"
    }
  },
 
}));

const Breadcrumb = props => {
  const { data, className, ...rest } = props;
  const classes = styless();


  return (
    <div className={className} {...rest}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrum}>
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
        <Link href="/medifiles">Medifiles</Link>
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


