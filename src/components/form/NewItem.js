import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewItem = () => (
  <form>
    <TextField
      id="id"
      label="Id"
      margin="normal"
    />
    <TextField
      id="name"
      label="Name"
      margin="normal"
    />
    <Button color="primary">
      Submit
    </Button>
  </form>
);

export default NewItem;