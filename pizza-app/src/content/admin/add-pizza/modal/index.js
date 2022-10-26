import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export const AddPizzaModal = ({ isOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    price: "",
    url: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, ingredients, price, url } = formData;

  const handleAdd = () => {
    fetch("http://localhost:3000/menu", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Add new Pizza</DialogTitle>
      <DialogContent>
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
        <TextField
          autoFocus
          margin="dense"
          id="ingredients"
          label="Ingredients"
          type="text"
          fullWidth
          variant="standard"
          value={ingredients}
          name="ingredients"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Price"
          type="number"
          fullWidth
          variant="standard"
          value={price}
          name="price"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="url"
          label="Image url"
          type="text"
          fullWidth
          variant="standard"
          value={url}
          name="url"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
