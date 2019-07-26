import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: null,
      customerSince: null,
      description: null,
      type: null,
    };
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <form className="modal-paper">
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
            onChange={event => this.onChange('id', event.target.value)}
          />
          <TextField
            id="name"
            label="Name"
            margin="normal"
            onChange={event => this.onChange('name', event.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            margin="normal"
            onChange={event => this.onChange('description', event.target.value)}
          />
          <FormControl style={{ minWidth: '200px' }}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              inputProps={{
                name: 'type',
                id: 'type',
              }}
              onChange={event => this.onChange('type', event.target.value)}
              value={this.state.type}
            >
              <MenuItem value={'Actual'}>Actual</MenuItem>
              <MenuItem value={'In Process'}>In Process</MenuItem>
              <MenuItem value={'Archived'}>Archived</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="customerSince"
            label="Customer Since"
            margin="normal"
            type="date"
            defaultValue="2019-07-20"
            onChange={event => this.onChange('customerSince', new Date(event.target.value))}
          />
          <Button color="primary" onClick={() => this.props.addCustomer(this.state)}>
            Submit
          </Button>
        </Grid>
      </form>);
  }
}

export default NewItem;