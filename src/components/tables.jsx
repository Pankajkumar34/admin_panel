import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "blue",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledEditCell = styled(StyledTableCell)({
  padding:  0,
  width: '10%', // Adjust the width as needed
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, Images, fat, carbs, protein) {
  return { name, Images, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 'https://via.placeholder.com/50',  6.0,  24,  4.0, ),
  createData('Ice cream sandwich', 'https://via.placeholder.com/50',  9.0,  37,  4.3, ),
  createData('Eclair',  'https://via.placeholder.com/50',  16.0,  24,  6.0, ),
  createData('Cupcake',  'https://via.placeholder.com/50',  3.7,  67,  4.3, ),
  createData('Gingerbread', 'https://via.placeholder.com/50',  16.0,  49,  3.9, ),
];


const handleEditClick = (row) => {
  // Perform actions such as logging the row data or opening a modal
  console.log('Edit button clicked for row:', row);

};


export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell >Images</StyledTableCell>
            <StyledTableCell >Images</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
             
             <StyledTableCell  component="th" scope="row">
             {row.name}
             </StyledTableCell>
             <StyledTableCell >
                <img src={row.imageUrl} alt={row.name} style={{ width: '50px', height: '50px' }} />
              </StyledTableCell>
              <StyledTableCell >
                <img src={row.imageUrl} alt={row.name} style={{ width: '50px', height: '50px' }} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledEditCell align="right">
                <IconButton aria-label="edit"
                  onClick={() => handleEditClick(row)}
                >
                  <EditIcon />
                </IconButton>
              </StyledEditCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}