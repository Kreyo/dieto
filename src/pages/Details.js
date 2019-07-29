import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import rowsData from '../data';

class Details extends React.Component {

  render() {
    const client = rowsData.find(item => item.id == this.props.match.params.clientId);
    return (
      <Fragment>
        <p>Selected client # {this.props.match.params.clientId}</p>
        <p>Client Name: { client.name }</p>
        <p>Client Type: { client.type }</p>
        <i>{ client.description }</i>
        <p>Customer Since: { client.customerSince.toDateString() }</p>
        <Button color="primary" onClick={() => this.props.history.push('/')}>
          Back to homepage
        </Button>
      </Fragment>
    );
  }
}

export default Details;
