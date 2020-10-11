import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function UndoRedo({ listItems, onClickUndo }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <button onClick={onClickUndo}>Undo</button>
      </div>
      <div>
        <button>Redo</button>
      </div>
    </div>
  );
}

export default UndoRedo;
