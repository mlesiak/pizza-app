import { useState, useEffect } from "react";
import { PageWrapper } from "../../common/page-wrapper";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((data) => {
        const formattedValue = data;
        setPizzas(formattedValue);
      });
  }, []);

  return (
    <PageWrapper title="Menu">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pizzas.map((pizza) => {
              return (
                <TableRow key={pizza.id}>
                  <TableCell>{pizza.name}</TableCell>
                  <TableCell align="right">{pizza.ingredients}</TableCell>
                  <TableCell align="right">{pizza.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
};
