import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class EditItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.customer.id,
      name: props.customer.name,
      customerSince: props.customer.customerSince,
      description: props.customer.description,
      type: props.customer.type,
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
            id="name"
            label="Name"
            margin="normal"
            fullWidth
            value={this.state.name}
            onChange={event => this.onChange('name', event.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            margin="normal"
            multiline
            fullWidth
            value={this.state.description}
            onChange={event => this.onChange('description', event.target.value)}
          />
          <FormControl style={{ minWidth: '200px' }} fullWidth>
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
            fullWidth
            defaultValue={this.state.customerSince.toISOString().slice(0, 10)}
            onChange={event => this.onChange('customerSince', new Date(event.target.value))}
          />
          <Button color="primary" onClick={() => this.props.editCustomer(this.state)}>
            Submit
          </Button>
        </Grid>
      </form>);
  }
}

export default EditItem;