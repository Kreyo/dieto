import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Datagrid from './components/Datagrid';
import ActionBar from './components/ActionBar';
import ModalWindow from './components/ModalWindow';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalType: null,
    };

    this.openModalNew = this.openModalNew.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModalNew = () => {
    this.setState({
      modalType: 'new',
    });
  };

  closeModal = () => {
    this.setState({
      modalType: null,
    });
  };

  render() {
    const rows = [
      {
        id: 0,
        name: 'First',
        customerSince: new Date('1995-12-17T03:24:00'),
        type: 'Actual',
        description: 'Just a small town girl living in a lonely world',
      },
      {
        id: 1,
        name: 'Second',
        customerSince: new Date('1995-12-17T03:24:00'),
        type: 'Actual',
        description: 'Just a city boy born and raised in South Detroit',
      },
    ];

    return (
      <div className="App">
        <Header />
        <Container style={{ marginTop: '80px' }}>
          <ActionBar addNew={this.openModalNew} />
          <Datagrid rows={rows} />
          <ModalWindow type={this.state.modalType} onClose={this.closeModal} />
        </Container>
      </div>
    );
  }
}

export default App;
