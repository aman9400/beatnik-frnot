import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,Collapse} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '400px',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit *0 ,
    paddingBottom: theme.spacing.unit *0,
  },

  nested_item: {
    position: 'relative',
    padding: '5px !important',
    marginBottom: '0px !important',
   
  },
  nested_icon: {
    position: 'relative',
    minWidth: 'auto !important',
  },
  icon_left: {
    position: 'relative',
    width: '0.7em',
    height:' 0.7em',
    fill: 'var(--inner-heading) !important',
    marginRight: '5px',
  },
  nested_Data: {
    position: 'relative',
    '& span ': {
      position: 'relative',
      fontSize: '14px !important',
      fontWeight: '600 !important',
      color: 'var(--inner-heading) !important',
      lineHeight: '30px !important',
    },
  },
  nested_Data_inner :{
    position: 'relative',
    '& span ': {
      position: 'relative',
      fontSize: '14px !important',
      fontWeight: '500 !important',
      color: 'var(--sub-heading-color) !important',
      lineHeight: '30px !important',
    },
  },
});

class MedicalHistory extends React.Component {
  state = { open: {} };

  handleClick = key => () => {
    console.log(key);
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    const { lists, classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {lists.map(({ key, label, icon: Icon, items }) => {
            const open = this.state[key] || false;
            return (
              <div key={key}>
                <ListItem
                  className={classes.nested_item}
                  button
                  onClick={this.handleClick(key)}
                >
                  <ListItemIcon className={classes.nested_icon}>
                    <Icon className={classes.icon_left} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.nested_Data}
                    primary={label}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {items.map(
                      ({
                        key: childKey,
                        label: childLabel,
                        icon: ChildIcon,
                      }) => (
                        <ListItem
                          key={childKey}
                          button
                          className={classes.nested}
                        >
                          <ListItemIcon className={classes.nested_icon}>
                            <ChildIcon className={classes.icon_left} />
                          </ListItemIcon>
                          <ListItemText className={classes.nested_Data_inner}  primary={childLabel} />
                        </ListItem>
                      ),
                    )}
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}

MedicalHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MedicalHistory);
