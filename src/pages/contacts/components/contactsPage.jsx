import Box from "@mui/material/Box";
import Title from "../../Title";
import Form from "./form";
import FindUs from "./findUs";
import List from "./list";

function ContactPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "74%", mx: "auto" }}>
        <Title title={"Контакты"} />
        <Box
          sx={{
            marginTop: "6.04vw",
            marginBottom: "6.04vw",
          }}
        >
          <List />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginTop: "3vw",
            }}
          >
            <Form />
            <FindUs />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactPage;
