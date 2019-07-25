import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <div className="header">
    <CssBaseline />
    <AppBar position="absolute">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Dieto Test App
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
    </main>
  </div>
);

export default Header;
