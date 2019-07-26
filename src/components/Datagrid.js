import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const Datagrid = ({ rows }) => (
  <div className="datagrid">
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Recent Clients</Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell/>
                  <TableCell>Name</TableCell>
                  <TableCell>Customer Since</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox onChange={() => rows[index].selected = !rows[index].selected } checked={row.selected} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.customerSince.toDateString()}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Datagrid;
