import { Grid, TextField, Modal, Typography } from "@mui/material";

const HomeMaterial = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          sx={{ backgroundColor: { xs: "red", sm: "steelblue" }, padding: 5 }}
        >
          Caja 1
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h2" align="center" sx={{ backgroundColor: "peru", padding: { xs: 2, sm: 5 } }}>
          Caja 2
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          sx={{ backgroundColor: "crimson", padding: { xs: 2, sm: 5 } }}
        >
          Caja 2
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeMaterial;
