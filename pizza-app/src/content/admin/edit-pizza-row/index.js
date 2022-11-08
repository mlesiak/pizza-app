import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const EditPizzaRow = ({ pizza, cancelEditMode, refresh }) => {
  const [formData, setFormData] = useState({
    name: pizza.name,
    ingredients: pizza.ingredients,
    price: pizza.price,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, ingredients, price } = formData;

  const handleSaveClick = () => {
    fetch(`http://localhost:3000/menu/${pizza.id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      cancelEditMode();
      refresh();
    });
  };

  const handleCancelClick = () => {
    cancelEditMode();
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          margin="dense"
          id="name"
          label="Ingredients"
          type="text"
          fullWidth
          variant="standard"
          value={ingredients}
          name="ingredients"
          onChange={handleChange}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          margin="dense"
          id="name"
          label="Price"
          type="text"
          fullWidth
          variant="standard"
          value={price}
          name="price"
          onChange={handleChange}
        />
      </TableCell>
      <TableCell width="70px">
        <Button variant="contained" color="success" onClick={handleSaveClick}>
          Save
        </Button>
      </TableCell>
      <TableCell width="70px">
        <Button variant="contained" color="inherit" onClick={handleCancelClick}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};
