
import Section from "./components/Section";
import CardItems from "./components/CardItems";
import Box from "@mui/material/Box";

function MainPage() {
  return (
    <Box sx={{ width: "100%" }}>

      <Box sx={{ width: "74%", mx: "auto" }}>
        <Section />
        <CardItems />
      </Box>

    </Box>
  );
}

export default MainPage;
