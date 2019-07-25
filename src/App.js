import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Datagrid from './components/Datagrid';
import ActionBar from './components/ActionBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: '80px' }}>
        <ActionBar />
        <Datagrid rows={[]} />
      </Container>
    </div>
  );
}

export default App;
