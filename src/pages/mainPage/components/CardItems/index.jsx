import Item from "../Item";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CardItems() {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.875vw",
          color: "#000",
          marginBottom: "1.927vw",
        }}
      >
        Товары
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6.823vw",
          marginBottom: "8.958vw",
          borderTop: "0.052vw solid #eaeaea",
          paddingTop: "2.344vw",
        }}
      >
        <Item />
      </Box>
    </Box>
  );
}

export default CardItems;
