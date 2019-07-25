import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const ActionBar = ({ addNew, editSelected, removeSelected }) => (
  <Toolbar>
    <IconButton onClick={addNew}>New</IconButton>
    <IconButton onClick={editSelected}>Edit</IconButton>
    <IconButton onClick={removeSelected}>Delete</IconButton>
  </Toolbar>
);

export default ActionBar;
