import { PageWrapper } from "../../../common/page-wrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MenuDetails = () => {
  const params = useParams();

  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  });

  return <PageWrapper title="Details"></PageWrapper>;
};
