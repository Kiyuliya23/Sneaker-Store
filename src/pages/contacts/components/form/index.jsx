import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "39.95vw",
        maxWidth: "100%",
      }}
    >
      <Box
        component="form"
        sx={{
          marginTop: "3.49vw",
          display: "flex",
          flexDirection: "column",
          gap: "2.03vw",
          width: "100%",
        }}
      >
        {/* Email + Name */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2.03vw",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Ваш email"
            fullWidth
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "0.52vw",

              "& .MuiOutlinedInput-root": {
                height: "3.5vw",
                border: "none",
                borderRadius: "0.52vw",

                "& fieldset": {
                  border: "none",
                },

                "&:hover fieldset": {
                  border: "none",
                },

                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },

              "& .MuiInputBase-input": {
                fontSize: "0.833vw",
                padding: "0 1.2vw",
              },

              "& .MuiInputBase-input::placeholder": {
                fontSize: "0.833vw",
                color: "#666",
                opacity: 1,
              },
            }}
          />

          <TextField
            placeholder="Ваше имя"
            fullWidth
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "0.52vw",

              "& .MuiOutlinedInput-root": {
                height: "3.5vw",
                border: "none",
                borderRadius: "0.52vw",

                "& fieldset": {
                  border: "none",
                },

                "&:hover fieldset": {
                  border: "none",
                },

                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },

              "& .MuiInputBase-input": {
                fontSize: "0.833vw",
                padding: "0 1.2vw",
              },

              "& .MuiInputBase-input::placeholder": {
                fontSize: "0.833vw",
                color: "#666",
                opacity: 1,
              },
            }}
          />
        </Box>

        {/* Message + Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.61vw",
            width: "100%",
          }}
        >
          <TextField
  placeholder="Введите сообщение"
  multiline
  fullWidth
  sx={{
    backgroundColor: "#fafafa",
    borderRadius: "0.52vw",

    "& .MuiOutlinedInput-root": {
      height: "6.04vw",
      padding: 0,
      border: "none",
      borderRadius: "0.52vw",
      alignItems: "flex-start",

      "& fieldset": {
        border: "none",
      },

      "&:hover fieldset": {
        border: "none",
      },

      "&.Mui-focused fieldset": {
        border: "none",
      },
    },

    "& .MuiInputBase-input": {
      fontSize: "0.833vw",
      padding: "1vw 1.2vw",
      boxSizing: "border-box",
      lineHeight: 1.2,
    },

    "& .MuiInputBase-input::placeholder": {
      fontSize: "0.833vw",
      color: "#666",
      opacity: 1,
    },
  }}
/>

          <Button
            type="submit"
            sx={{
              fontWeight: 600,
              fontSize: "0.729vw",
              lineHeight: "81%",
              color: "#fff",
              borderRadius: "0.521vw",
              width: "6.823vw",
              height: "2.76vw",
              padding: 0,
              background: "#090d1a",
              marginLeft: "auto",

              "&:hover": {
                background: "#090d1a",
              },
            }}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;