import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Datagrid from './components/Datagrid';
import ActionBar from './components/ActionBar';
import ModalWindow from './components/ModalWindow';

import './App.css';
import { MODAL_TYPES } from './constants';
import rowsData from './data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalType: MODAL_TYPES.NONE,
      rows: rowsData,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.getSelectedCustomer = this.getSelectedCustomer.bind(this);
  }

  openModal = type => {
    const selectedRows = this.state.rows.filter(item => item.selected);
    if (selectedRows.length !== 1) {
      type = MODAL_TYPES.ERROR;
    }
    this.setState({
      modalType: type,
    });
  };

  closeModal = () => {
    this.setState({
      modalType: MODAL_TYPES.NONE,
    });
  };

  removeSelected = () => {
    const updatedRows = this.state.rows.filter(item => !item.selected);
    this.setState({ rows: updatedRows });
  };

  addCustomer = customerRow => {
    const updatedRows = this.state.rows;
    updatedRows.push(customerRow);
    this.setState({ rows: updatedRows });
    this.closeModal();
  };

  editCustomer = customerRow => {
    const updatedRowIndex = this.state.rows.findIndex(item => item.id === customerRow.id);
    const updatedRows = this.state.rows;
    customerRow.selected = true;
    updatedRows[updatedRowIndex] = customerRow;
    this.setState({ rows: updatedRows });
    this.closeModal();
  };

  getSelectedCustomer = () => this.state.rows.find(item => item.selected);

  render() {
    return (
      <div className="App">
        <Header />
        <Container style={{ marginTop: '80px' }}>
          <ActionBar
            addNew={() => this.openModal(MODAL_TYPES.NEW)}
            editSelected={() => this.openModal(MODAL_TYPES.EDIT)}
            removeSelected={this.removeSelected}
          />
          <Datagrid rows={this.state.rows} />
          <ModalWindow
            type={this.state.modalType}
            onClose={this.closeModal}
            addCustomer={this.addCustomer}
            editCustomer={this.editCustomer}
            customer={this.getSelectedCustomer()}
          />
        </Container>
      </div>
    );
  }
}

export default App;
