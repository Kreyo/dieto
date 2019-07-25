import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const NewItem = () => {
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      top: '30%',
      left: '30%',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  }));

  const classes = useStyles();
  return (
    <form className={classes.paper}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
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
        <TextField
          id="customerSince"
          label="Customer Since"
          margin="normal"
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type">Type</InputLabel>
          <Select
            inputProps={{
              name: 'type',
              id: 'type',
            }}
          >
            <MenuItem value={'Actual'}>Actual</MenuItem>
            <MenuItem value={'In Process'}>In Process</MenuItem>
            <MenuItem value={'Archived'}>Archived</MenuItem>
          </Select>
        </FormControl>
        <Button color="primary">
          Submit
        </Button>
      </Grid>
    </form>);
};

export default NewItem;