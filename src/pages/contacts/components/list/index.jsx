import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function List() {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", flexDirection: "column", gap: "0.68vw" }}
    >
      <Typography
        component="li"
        sx={{
          fontWeight: 400,
          fontSize: "0.94vw",
          lineHeight: "81%",
          color: "rgba(0, 0, 0, 0.5)",
          opacity: 0.8,
        }}
      >
        8 800 000 00 00
      </Typography>
      <Typography
        component="li"
        sx={{
          fontWeight: 400,
          fontSize: "0.94vw",
          lineHeight: "81%",
          color: "rgba(0, 0, 0, 0.5)",
          opacity: 0.8,
        }}
      >
        emailexample@email.com
      </Typography>
    </Box>
  );
}

export default List;
