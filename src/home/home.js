import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {tileData} from './tileData';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 450,
  },
}));

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();
  const styles = useStyle();

  return (
    <div>
      <Paper className={`${classes.root} paper-class`}>
        <Typography variant="h5" component="h3" className={'text-margin'}>
          Участки ДНП "СОРЖА" теперь в рассрочку до года!
        </Typography>
        <Typography component="p">
          Подробности рассрочки уточнйте по телефону.
        </Typography>
      </Paper>
      <GridList cellHeight={220} className={`${styles.gridList} grid-list`} cols={5}>
        {tileData.map((tile, i)=> (
          <GridListTile key={i} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
