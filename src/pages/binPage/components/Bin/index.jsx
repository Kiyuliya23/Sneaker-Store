import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";

const CART_URL = "https://6a833c7ccb486d2434037f53.mockapi.io/cartItems";

function Bin() {
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    try {
      const response = await axios.get(CART_URL);

      setCarts(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке корзины:", error);
    }
  };

  useEffect(() => {
    getCarts();
    const handleCartUpdate = () => {
      getCarts();
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  if (carts.length === 0) {
    return null;
  }

  const totalPrice = carts.reduce(
    (total, cart) => total + Number(cart.price),
    0,
  );

  return (
    <Box
      sx={{
        background: "#fafafa",
        paddingTop: "1.35vw",
        paddingBottom: "2.24vw",
        paddingLeft: "1.46vw",
        paddingRight: "4.11vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.875vw",
          color: "#000",
          textAlign: "center",
          paddingBottom: "2.19vw",
        }}
      >
        Итого
      </Typography>

      {/* Товары */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2.14vw",
          paddingBottom: "3.33vw",
        }}
      >
        {carts.map((cart) => (
          <Typography
            key={cart.id}
            sx={{
              fontWeight: 400,
              fontSize: "1.25vw",
              lineHeight: "98%",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {cart.name}
          </Typography>
        ))}
      </Box>

      {/* Итоговая цена */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "0.26vw",
          borderTop: "1px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "0.73vw",
            textTransform: "uppercase",
            color: "#2d2d2d",
          }}
        >
          Цена:
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.25vw",
            color: "#000",
          }}
        >
          {totalPrice} €
        </Typography>
      </Box>
    </Box>
  );
}

export default Bin;
