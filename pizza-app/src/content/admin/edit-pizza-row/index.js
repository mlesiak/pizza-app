import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const EditPizzaRow = ({ pizza, cancelEditMode }) => {
  const handleSaveClick = () => {};

  const handleCancelClick = () => {
    cancelEditMode();
  };

  return (
    <TableRow>
      <TableCell>{pizza.name}</TableCell>
      <TableCell align="right">{pizza.ingredients}</TableCell>
      <TableCell align="right">{pizza.price}</TableCell>
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
