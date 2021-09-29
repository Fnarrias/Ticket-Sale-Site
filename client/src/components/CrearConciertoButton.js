import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useHistory } from "react-router";

const CrearConciertoButton = () => {
  const history = useHistory();

  const buttonStyle = {
    gridStyles: {
      paddingLeft: "25vh",
      paddingRight: "25vh",
      paddingTop: "10vh",
      paddingBottom: "10vh",
      backgroundColor: "#312151",
    },

    cardContent: {
      backgroundColor: "#44318D",
      color: "#ffffff",
    },
  };

  //! enlazar despues al crear concierto
  const onClick = () => {
    history.push("/registro");
  };

  return (
    <Grid style={buttonStyle.gridStyles}>
      <Card sx={{ maxWidth: 345, borderRadius: 2 }}>
        <CardActionArea onClick={onClick}>
          <CardMedia
            component="img"
            height="140"
            image="/static/media/pexels-sebastian-ervi-1763075.6d6dc216.jpg"
            alt="a nice img"
          />
          <CardContent style={buttonStyle.cardContent}>
            <Typography variant="h6" component="div">
              Crea tu Concierto !!!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CrearConciertoButton;
