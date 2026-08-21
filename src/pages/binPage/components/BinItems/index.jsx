import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Bin from "../../../images/Bin.svg";

const CART_URL = "https://6a833c7ccb486d2434037f53.mockapi.io/cartItems";

function BinItems() {
  const [carts, setCarts] = useState([]);

  const getCarts = async () => {
    try {
      const response = await axios.get(CART_URL);

      setCarts(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке корзины:", error);
    }
  };

  const handleDelete = async (cart) => {
    try {
      await axios.delete(`${CART_URL}/${cart.id}`);
      window.dispatchEvent(new Event("cartUpdated"));
      getCarts();
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  useEffect(() => {
    getCarts();
  }, []);

  if (carts.length === 0) {
    return (
      <Box
        sx={{
          paddingTop: "5.938vw",
          paddingBottom: "5.938vw",

          transform: "translateX(26.04vw)",
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(22px, 1.4vw, 28px)",
            fontWeight: 600,
            textAlign: "center",
            color: "text.primary",
            mb: 1,
          }}
        >
          К сожалению, корзина пуста...
        </Typography>

        <Typography
          sx={{
            fontSize: "clamp(16px, 0.95vw, 19px)",
            textAlign: "center",
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Но Вы можете это{" "}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "primary.dark",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
            >
              исправить
            </Typography>
          </NavLink>
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3.49vw",

        width: "fit-content",
      }}
    >
      {carts.map((cart) => (
        <Box
          key={cart.id}
          sx={{
            display: "flex",
            width: "47.031vw",
            height: "6.979vw",
            // marginTop: "5.938vw",
            alignItems: "center",
            background: "#fafafa",
            borderRadius: "0.521vw",
          }}
        >
          <img
            src={cart.image}
            alt={cart.name}
            style={{
              width: "10.26vw",
              height: "4.688vw",
              objectFit: "cover",
              paddingRight: "1.875vw",
              paddingLeft: "1.2vw",
              borderRight: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "7.14vw",
              paddingRight: "1.2vw",
            }}
          >
            <Box
              sx={{
                display: "flex",
                paddingLeft: "1.875vw",
                gap: "1.04vw",
                alignItems: "center",
                // paddingRight: "1.2vw",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "1.25vw",
                  color: "#000",
                }}
              >
                {cart.name}
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.73vw",
                    textTransform: "uppercase",
                    color: "#666",
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
                  {cart.price}$
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => handleDelete(cart)}
              sx={{
                borderRadius: "100%",
                backgroundColor: "#f3f3f3",
              }}
            >
              {
                <img
                  src={Bin}
                  alt="Удалить"
                  style={{
                    width: "1.56vw",
                    height: "1.61vw",
                  }}
                />
              }
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default BinItems;
