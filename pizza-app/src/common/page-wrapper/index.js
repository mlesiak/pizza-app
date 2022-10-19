import Typography from "@mui/material/Typography";

export const PageWrapper = ({ title, children }) => {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {children}
    </div>
  );
};
