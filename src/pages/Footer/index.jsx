import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import facebook from "../images/Facebook.svg";
import instagram from "../images/Instagram.svg";
import twitter from "../images/Twitter.svg";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Footer() {
  const [focused, setFocused] = useState(false);

  const { control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return (
    <Box
      sx={{
        background: "#3b3c3d",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "74%",
          mx: "auto",
          paddingTop: "3.8vw",
          paddingBottom: "3.33vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.25vw",
              lineHeight: "81%",
              color: "#fff",
              opacity: 0.8,
            }}
          >
            Контакты
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1.35vw",
            }}
          >
            <a href="#">
              <img src={facebook} alt="facebook" style={{ width: "1.67vw" }} />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" style={{ width: "1.67vw" }} />
            </a>
            <a href="#">
              {" "}
              <img
                src={instagram}
                alt="instagram"
                style={{ width: "1.67vw" }}
              />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.68vw",
            marginTop: "2.03vw",
            marginBottom: "4.84vw",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.94vw",
              lineHeight: "81%",
              color: "rgba(255, 255, 255, 0.5)",
              opacity: 0.8,
            }}
          >
            8 800 000 00 00
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "0.94vw",
              lineHeight: "81%",
              color: "rgba(255, 255, 255, 0.5)",
              opacity: 0.8,
            }}
          >
            emailexample@email.com
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.04vw",
              lineHeight: "81%",
              color: "rgba(255, 255, 255, 0.5)",
              opacity: 0.8,
            }}
          >
            2024 Сникер-магазин. Все права защищены
          </Typography>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <Box
                sx={{
                  position: "relative",
                  width: "21.2vw",
                }}
              >
                <TextField
                  {...field}
                  id="standard-basic"
                  label={focused ? "Ваш email:" : "Введите свой email:"}
                  variant="standard"
                  onFocus={() => setFocused(true)}
                  onBlur={() => {
                    field.onBlur();
                    setFocused(false);
                  }}
                  error={!!error}
                  sx={{
                    width: "100%",

                    "& .MuiInputBase-input": {
                      color: "#fff",
                      opacity: 0.8,
                    },

                    "& .MuiInputLabel-root": {
                      fontWeight: 400,
                      fontSize: "1.04vw",
                      lineHeight: "81%",
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 0.8,
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(255, 255, 255, 0.5)",
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.5)",
                    },

                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "rgba(255, 255, 255, 0.8)",
                    },
                  }}
                />

                {error && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "calc(100% + 0.3vw)",
                      left: 0,
                      fontSize: "0.65vw",
                      lineHeight: 1,
                      color: "#d32f2f",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {error.message}
                  </Typography>
                )}
              </Box>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
