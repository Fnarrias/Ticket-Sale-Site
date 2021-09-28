import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const CrearConciertoButton = () => {
  const buttonStyle = {
    gridStyles: {
      padding: "20vh",
    },
  };
  return (
    <Grid style={buttonStyle.gridStyles}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            /*image="imagen" */ alt="a nice img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Crea tu Concierto !!!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CrearConciertoButton;
