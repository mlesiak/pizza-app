import { PageWrapper } from "../../common/page-wrapper";
import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AddPizza } from "./add-pizza";
import { PizzaRow } from "./pizza-row";
import { EditPizzaRow } from "./edit-pizza-row";

export const Admin = () => {
  const [pizzas, setPizzas] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchPizzas = () => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((data) => {
        const formattedValue = data;
        setPizzas(formattedValue);
      });
  };

  const enterEditMode = (id) => {
    setEditId(id);
  };

  const cancelEditMode = () => {
    setEditId(null);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PageWrapper title="Admin">
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
            {pizzas.map((pizza) =>
              pizza.id === editId ? (
                <EditPizzaRow
                  pizza={pizza}
                  key={pizza.id}
                  cancelEditMode={cancelEditMode}
                />
              ) : (
                <PizzaRow
                  key={pizza.id}
                  pizza={pizza}
                  refresh={fetchPizzas}
                  enterEditMode={enterEditMode}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <AddPizza refresh={fetchPizzas} />
    </PageWrapper>
  );
};
