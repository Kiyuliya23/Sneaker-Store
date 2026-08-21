import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Title({ title }) {
  return (
    <Box
      sx={{
        paddingTop: "2.604vw",
        paddingBottom: "2.604vw",
        color: "#000",
        borderBottom: "0.052vw solid #eaeaea",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.875vw",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Title;
