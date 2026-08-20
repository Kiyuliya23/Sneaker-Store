import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const items = async () => {
  const response = await axios.get(
    "https://6a833c7ccb486d2434037f53.mockapi.io/productData",
  );

  return response.data;
};

function Item() {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  function changeSign(id) {
    setActiveProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id],
    );
  }

  useEffect(() => {
    const getProducts = async () => {
      const data = await items();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <>
      {products.slice(0, 3).map((product) => (
        <Box
          key={product.id}
          sx={{
            border: "2px solid rgba(0, 0, 0, 0.15)",
            borderRadius: "2.188vw",
            display: "flex",
            flexDirection: "column",
            gap: "2.188vw",
            padding: "2.552vw 2.813vw 2.031vw 2.031vw",
            width: "20.104vw",
            height: "20.469vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.667vw",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "14.479vw",
                height: "6.615vw",
                objectFit: "cover",
              }}
            />

            <Typography>{product.name}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>Цена:</Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.25vw",
                  color: "#000",
                }}
              >
                {product.price}$
              </Typography>
            </Box>

            <Button
              disabled={activeProducts.includes(product.id)}
              sx={{
                minWidth: 0,
                width: "1.927vw",
                height: "1.927vw",
                padding: 0,
                border: "1px solid rgba(104, 102, 102, 0.5)",
                borderRadius: "50%",
                color: "black",
                backgroundColor: "rgba(233, 233, 233, 0.5)",
                "&:hover": {
                  border: "3px solid rgba(104, 102, 102, 0.5)",
                  color: "white",
                  backgroundColor: "black",
                },
              }}
              onClick={() => changeSign(product.id)}
            >
              {activeProducts.includes(product.id) ? "-" : "+"}
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Item;
