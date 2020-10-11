import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function StatusCart({ onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ marginRight: 5 }}>Show: </div>
      <div style={{ marginRight: 5 }} onClick={() => onClick('all')}>
        All
      </div>
      <div style={{ marginRight: 5 }} onClick={() => onClick('active')}>
        Active
      </div>
      <div style={{ marginRight: 5 }} onClick={() => onClick('completed')}>
        Completed
      </div>
    </div>
  );
}

export default StatusCart;
