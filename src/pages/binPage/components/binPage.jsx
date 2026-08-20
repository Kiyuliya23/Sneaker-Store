import Box from "@mui/material/Box";
import Title from "../../Title";
import BinItems from "./BinItems";

function BinPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "74%", mx: "auto" }}>
        <Title title={"Корзина"} />
        <Box>
          <BinItems />
        </Box>
      </Box>
    </Box>
  );
}

export default BinPage;
