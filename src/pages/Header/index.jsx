import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const MyLink = styled(NavLink)({
  fontWeight: 600,
  fontSize: "0.78vw",
  color: "rgba(255, 255, 255, 0.5)",
  "&.active": {
    color: "#fff",
  },
});

function Header() {
  return (
    <Box
      sx={{
        background: "#3b3c3d",
        height: "5.73vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "74%", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              fontWeight: 900,
              fontSize: "1.04vw",
              color: "#fff",
            }}
          >
            Сникер-магазин
          </Typography>
          <Box sx={{ display: "flex", gap: "3.33vw" }}>
            <MyLink to="/" end>
              Главная
            </MyLink>
            <MyLink to="/bin">Корзина</MyLink>
            <MyLink to="/contacts">Контакты</MyLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
