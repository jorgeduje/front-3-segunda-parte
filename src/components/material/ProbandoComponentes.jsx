import { Box, Button, TextField, Typography } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

export const ProbandoComponentes = () => {
  return (
    <Box style={{ padding: 15 }}>
      <TextField label="Nombre" variant="outlined" type="text" />
      <TextField
        label="Telefono"
        type="tel"
        variant="outlined"
        helperText={"El telefono debe tener 6 numeros"}
        // error={true}
      />
      <Button variant="contained">Contained</Button>
      <AddBusinessIcon color="secondary" />
      <Typography color={"primary"}>Hola como estas</Typography>
    </Box>
  );
};
