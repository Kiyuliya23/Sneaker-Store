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
      }}
    >
      <Box>
        <Box
          component="form"
          sx={{
            marginTop: "3.49vw",
            display: "flex",
            flexDirection: "column",
            gap: "2.03vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2.03vw",
            }}
          >
            <TextField
              id="demo-helper-text-aligned"
              label="Ваш email"
              sx={{
                width: "100%",
                backgroundColor: "#fafafa",
                borderRadius: "0.52vw",
                "& .MuiOutlinedInput-root": {
                  border: "none",
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
              }}
            />
            <TextField
              id="demo-helper-text-aligned"
              label="Ваше имя"
              sx={{
                width: "100%",
                backgroundColor: "#fafafa",
                borderRadius: "0.52vw",
                "& .MuiOutlinedInput-root": {
                  border: "none",
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
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.61vw" }}>
            <TextField
              id="demo-helper-text-aligned"
              label="Введите сообщение"
              multiline
              sx={{
                width: "100%",
                backgroundColor: "#fafafa",
                borderRadius: "0.52vw",
                "& .MuiOutlinedInput-root": {
                  height: "6.04vw",
                  border: "none",
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
                "& textarea": {
                  height: "100% !important",
                  overflowY: "auto !important",
                  boxSizing: "border-box",
                },
              }}
            />
            <Button
              type="submit"
              sx={{
                borderRadius: "0.52vw",
                width: "6.82vw",
                height: "2.76vw",
                background: "#090d1a",
                fontSize: "0.73vw",
                lineHeight: "81%",
                color: "#fff",
                marginLeft: "auto",
              }}
            >
              Отправить
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
