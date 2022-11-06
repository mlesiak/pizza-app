import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const PizzaRow = ({ pizza, refresh }) => {
  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/menu/${pizza.id}`, {
      method: "delete",
    }).then(() => {
      refresh();
    });
  };

  return (
    <TableRow>
      <TableCell>{pizza.name}</TableCell>
      <TableCell align="right">{pizza.ingredients}</TableCell>
      <TableCell align="right">{pizza.price}</TableCell>
      <TableCell width="70px">
        <Button variant="contained">Edit</Button>
      </TableCell>
      <TableCell width="70px">
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
