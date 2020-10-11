import React from 'react';
import Container from '@material-ui/core/Container';
import AddCart from '../containers/addCart';
import ListsCart from '../containers/ListsCart';
import StatusCart from '../containers/StatusCart';
import UndoRedo from '../containers/UndoRedo';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <AddCart />
      {/* <ListsCart />
      <StatusCart />
      <UndoRedo /> */}
    </Container>
  );
}
