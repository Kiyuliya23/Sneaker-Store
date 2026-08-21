import Box from "@mui/material/Box";
import Title from "../../Title";
import BinItems from "./BinItems";
import Bin from "./Bin";

function BinPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "74%", mx: "auto" }}>
        <Title title={"Корзина"} />
        <Box
          sx={{
            display: "flex",
            marginTop: "5.94vw",
            marginBottom: "5.94vw",
            gap: "6.72vw",
          }}
        >
          <BinItems />
          <Bin />
        </Box>
      </Box>
    </Box>
  );
}

export default BinPage;
