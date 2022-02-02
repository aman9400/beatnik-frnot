import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, colors } from '@material-ui/core';
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { IconAlternate } from 'components/molecules';
import { Accordion } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  accordionGrid: {
    '& .accordion__item-wrapper': {
      boxShadow: '0 1.5rem 4rem rgba(22,28,45,.05)',
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeight300: {
    fontWeight: 300,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  listItemText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.error.main,
    color: 'white',
    fontWeight: 700,
  },
}));

const Questions = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles([]);
  const { url } = props.api_data;
  const items = [];
  // var len = oFullResponse.results.length;
  props.api_data.data.forEach(function(arrayItem) {
    // console.log(props.api_data.data.[0]);
    items.push({
      id: arrayItem.nid,
      title: arrayItem.title,
      subtitle: arrayItem.field_subtitle.substring(0, 100),
      text: arrayItem.body.replace(/<[^>]*>?/gm, ''),
      // link: 'Check it out',
    });
  });

  // const [getData, setData] = useState([]);

  // const fetchData = async () => {
  //   const req = await fetch(
  //     'https://randomuser.me/api/?gender=male&results=100',
  //   );
  //   const newData = await req.json();

  //   return setData(newData.info);
  // };

  // const handleClick = event => {
  //   event.preventDefault();
  //   fetchData();
  // };

  // console.log('dddd', props);

  return (
    <div className={className} {...rest}>
      {/* <Button onClick={handleClick}>FETCH DATA</Button>
      <h1>{getData.results}</h1> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>
            <ListItem disableGutters>
              <ListItemAvatar className={classes.listItemAvatar}>
                <IconAlternate
                  fontIconClass={data.icon}
                  size="medium"
                  color={colors.red}
                  shape="circle"
                />
              </ListItemAvatar>
              <ListItemText
                primary={url}
                secondary={`Let’s try to fix your ${url} issues.`}
                primaryTypographyProps={{
                  variant: 'h6',
                }}
                secondaryTypographyProps={{
                  variant: 'h6',
                }}
              />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText
                className={classes.listItemText}
                primary="Updated Answers"
                secondary={`${props.api_data.data.length} answers`}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textSecondary',
                }}
                secondaryTypographyProps={{
                  variant: 'body1',
                  className: classes.answerCount,
                }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.accordionGrid}>
          <Accordion
            items={items}
            titleProps={{
              variant: 'subtitle1',
              className: classes.fontWeightBold,
            }}
            subtitleProps={{
              className: classes.fontWeight300,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Questions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Questions;
