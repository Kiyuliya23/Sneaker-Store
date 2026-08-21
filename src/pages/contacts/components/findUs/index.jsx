import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import facebook from "../../../images/facebook.contacts.svg";
import x from "../../../images/x.svg";
import Prizrak from "../../../images/Prizrak.svg";

function FindUs() {
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "0.94vw",
        paddingBottom: "3.75vw",
        paddingLeft: "3.39vw",
        paddingRight: "3.39vw",
        gap: "2.03vw",
        flexDirection: "column",
        borderRadius: "0.52vw",
        width: "23.85vw",
        height: "11.51vw",
        background: "#fafafa",
        marginTop: "3.49vw",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "1.04vw",
          lineHeight: "81%",
          color: "rgba(0, 0, 0, 0.7)",
          opacity: 0.8,
          textAlign: "center"
        }}
      >
        Найдите нас:
      </Typography>
      <Box sx={{ display: "flex", gap: "2.6vw" }}>
        <img
          src={Prizrak}
          alt="Prizrak"
          style={{ width: "3.96vw", height: "3.96vw" }}
        />
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: "3.96vw", height: "3.96vw" }}
        />
        <img src={x} alt="X" style={{ width: "3.96vw", height: "3.96vw" }} />
      </Box>
    </Box>
  );
}

export default FindUs;
