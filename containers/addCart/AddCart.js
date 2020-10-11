import React, { useState } from 'react';
import ListsCart from '../ListsCart';
import StatusCart from '../StatusCart';
import UndoRedo from '../UndoRedo';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function AddCart() {
  const [inValues, setInValues] = useState('');
  const [arrCart, setarrCart] = useState([]);
  const [temp, setTemp] = useState([]);
  const [status, setStatus] = useState('all');

  const handleClickAdd = () => {
    const myObj = {
      name: inValues,
      status: 'active',
      id: arrCart.length,
    };
    let myarr = [...arrCart, myObj];
    setarrCart(myarr);
    setTemp(myarr);
    setInValues('');
    // console.log('handleClickAdd', inValues, myarr, arrCart);
  };

  const onClickChangeStatus = (index) => {
    const filterData = arrCart.filter((i) => i.id !== index);
    let myData = {
      ...arrCart[index],
      status: 'completed',
    };
    let myarr = [...filterData, myData];

    console.log('onClickChangeStatus', { index, arrCart, myData, myarr, filterData });
    setarrCart(myarr);
    setTemp(myarr);
  };

  const onClickStatus = (value) => {
    const myCart = temp;
    if (value === 'active') {
      const output = myCart.filter((i) => i.status === 'active');
      setarrCart(output);
    } else if (value === 'completed') {
      const output = myCart.filter((i) => i.status === 'completed');
      setarrCart(output);
    } else {
      setarrCart(myCart);
    }
  };

  const handleUndo = () => {
    const myarr = [...arrCart];
    const data = myarr.splice(myarr.length - 1);
    setarrCart(data);
    console.log('handleUndo', data);
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div>
          <input
            type="text"
            value={inValues}
            onChange={({ target }) => setInValues(target.value)}
          />
        </div>
        <div>
          <button onClick={handleClickAdd}>Add Shopping List</button>
        </div>
      </div>
      <div>
        <ListsCart listItems={arrCart} onClick={onClickChangeStatus} />
      </div>
      <div>
        <StatusCart onClick={onClickStatus} />
      </div>
      <div>
        <UndoRedo listItems={arrCart} onClickUndo={handleUndo} />
      </div>
    </div>
  );
}

export default AddCart;
