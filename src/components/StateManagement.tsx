import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
type Comp2Props= {
  text: any
}
const Comp = () => {
  return <div style={{background:'#FAF8EB',
  border: '1px solid #FAF8EB',
  borderRadius: '4px', color: '#A08817'}}>CONSIDER</div>
}
const Comp2 = ({text}: Comp2Props) => {
  return <div style={{background:'#F2FCFB',
  border: '1px solid #F2FCFB',
  borderRadius: '4px', color: '#17A076'}}>{text}</div>
}
const StateManagement = () => {
    const [rows, setRows] = useState<{
      id: number;
      name: string;
      adjudication: JSX.Element | string;
      status: JSX.Element;
      location: string;
      date: string;
  }[]>(
        [
            {
              "id": 1,
              "name": "Alice",
              "adjudication":"-",
              "status": <Comp2 text="CLEAR"/>,
              "location": "France",
              "date": "2022-02-15"
            },
            {
              "id": 2,
              "name": "Bob",
              "adjudication": "-",
              "status": <Comp2 text="CLEAR"/>,
              "location": "Canada",
              "date": "2022-05-20"
            },
            {
              "id": 3,
              "name": "Charlie",
              "adjudication": "-",
              "status": <Comp2 text="CLEAR"/>,
              "location": "Mexico",
              "date": "2022-09-10"
            },
            {
              "id": 4,
              "name": "David",
              "adjudication": "-",
              "status": <Comp2 text="CLEAR"/>,
              "location": "Japan",
              "date": "2022-01-05"
            },
            {
              "id": 5,
              "name": "Eve",
              "adjudication": "-",
              "status": <Comp2 text="CLEAR"/>,
              "location": "Brazil",
              "date": "2022-11-01"
            },
            {
                "id": 6,
                "name": "Frank",
                "adjudication": "-",
                "status": <Comp2 text="CLEAR"/>,
                "location": "Germany",
                "date": "2022-03-08"
              },
              {
                "id": 7,
                "name": "Grace",
                "adjudication": "-",
                "status": <Comp2 text="CLEAR"/>,
                "location": "Australia",
                "date": "2022-07-14"
              },
              {
                "id": 8,
                "name": "Henry",
                "adjudication": "-",
                "status": <Comp2 text="CLEAR"/>,
                "location": "Spain",
                "date": "2022-10-02"
              },
          ]
          
    )

    const handleCellClick = (id: any) => {
        const updatedRows = rows.map((row) => {
          if (row.id === id) {
            return { ...row, adjudication: <Comp2 text="ENGAGE"/> };
          } else {
            return row;
          }
        });
        setRows(updatedRows);
      };
      const handleCellClick2 = (id: any) => {
        const updatedRows = rows.map((row) => {
          if (row.id === id) {
            return { ...row, status: <Comp/> };
          } else {
            return row;
          }
        });
        setRows(updatedRows);
      };
  return (
    <TableContainer component={Paper} sx={{ width: '90%', margin: '10px auto' }}>
    <Table sx={{ width: '100%' }} aria-label="candidates table">
      <TableHead>
        <TableRow>
          <TableCell align="center" width="75px">NAME</TableCell>
          <TableCell align="center" width="75px">ADJUDICATION</TableCell>
          <TableCell align="center" width="78px">STATUS</TableCell>
          <TableCell align="center" width="75px">LOCATION</TableCell>
          <TableCell align="center" width="75px">DATE</TableCell>
          <TableCell align="center" width="75px"></TableCell>
          <TableCell align="center" width="75px"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell align="center" style={{color: '#224DFF'}}>
              {row.name}
            </TableCell>
            <TableCell align="center">{row.adjudication}</TableCell>
            <TableCell align="center">{row.status}</TableCell>
            <TableCell align="center">{row.location}</TableCell>
            <TableCell align="center">{row.date}</TableCell>
            <TableCell align="center" onClick={(event) => handleCellClick(row.id)}
            ><Button size='small'>ENGAGE</Button></TableCell>
            <TableCell align="center" onClick={(event) => handleCellClick2(row.id)}
            ><Button size='small'>CONSIDER</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default StateManagement