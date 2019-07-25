import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const ActionBar = () => (
  <Toolbar>
    <IconButton>New</IconButton>
    <IconButton>Edit</IconButton>
    <IconButton>Delete</IconButton>
  </Toolbar>
);

export default ActionBar;
