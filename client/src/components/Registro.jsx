import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Button, TextField } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import registro from "../actions/Registro";


const Registro = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh", //?Gabriel: cambie de 50vh a 70vh
    width: 280,
    margin: "100px auto", //?Gabriel: cambie de 20px a 100px
  };
  const avatarStyle = { backgroundColor: "#d83f87" };
  const textFieldStyle = { margin: 5 };
  const buttonStyle = { marginTop: 25 };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(e.target);
    const payload = {};
    for (const [campo, val] of formData.entries()) payload[campo] = val;
    const user = {
      nombre: payload.nombre,
      email: payload.email,
      password: payload.password1,
    };
    console.log(user);

    const crearUsuario = async () => {
      const { success, message } = await registro(user);

      console.log({ success });

      if (success) {
        form
          .querySelectorAll(`input:not([type="submit"])`)
          .forEach((input) => (input.value = ""));
        window.alert("Usuario creado con éxito");
      } else {
        window.alert(`No se pudo registrar. ${message}`);
      }
    };
    if(payload.password1 === payload.password2){
        crearUsuario();
    }else{
      window.alert("Passwords no coinciden");
    }
    
  };


  return (
    <>
      <Grid>
        <Paper elevation={5} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <PermIdentityIcon></PermIdentityIcon>
            </Avatar>
            <h2>Regístrate</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
          <TextField
            style={textFieldStyle}
            variant="standard"
            label="Nombre"
            name="nombre" 
            placeholder="Ingrese su nombre"
            fullWidth
            required
          />
          <TextField
            style={textFieldStyle}
            variant="standard"
            label="Correo"
            name="email"
            placeholder="Ingrese su correo"
            fullWidth
            required
          />
          <TextField
            style={textFieldStyle}
            variant="standard"
            label="Contraseña"
            name="password1"
            placeholder="Ingrese su contraseña"
            type="password"
            fullWidth
            required
          />
          <TextField
            style={textFieldStyle}
            variant="standard"
            label="Contraseña2"
            name="password2"
            placeholder="Repita su contraseña"
            type="password"
            fullWidth
            required
          />
          <Button
            style={buttonStyle}
            type="submit"
            variant="outlined"
            fullWidth
            sx={{ color: "#d83f87", borderColor: "#d83f87" }}
          >
            Crear cuenta
          </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Registro;
