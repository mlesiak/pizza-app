import { PageWrapper } from "../../../common/page-wrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export const MenuDetails = () => {
  const params = useParams();

  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setPizza(data);
      });
  }, []);

  return (
    <PageWrapper title={pizza.name}>
      <Avatar
        sx={{ width: "200px", height: "200px", my: 2 }}
        alt="pizza"
        src={
          pizza.url
            ? pizza.url
            : "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
        }
      />
      <Typography variant="subtitle">{pizza.ingredients}</Typography>
      <Typography variant="h5">{pizza.price}</Typography>
    </PageWrapper>
  );
};
