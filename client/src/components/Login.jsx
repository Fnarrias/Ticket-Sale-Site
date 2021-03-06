import React from "react";
import { Link as ReactLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Link, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import autenticar from "../actions/Autenticacion";
import { useHistory } from "react-router";

const Login = (props) => {
  const { setUserLogged, setUserId } = props;
  let history = useHistory();
  //Estilos
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "100px auto", //?Gabriel: cambien de 40px a 100 px
  };
  const avatarStyle = { backgroundColor: "#d83f87" };
  const textFieldStyle = { margin: 5 };
  const buttonStyle = { marginTop: 25 };
  const typographyStyle = { marginTop: 10 };
  //------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(e.target);
    const payload = {};
    for (const [campo, val] of formData.entries()) payload[campo] = val;
    const user = {
      email: payload.email,
      password: payload.password,
    };
    console.log(user);

    const login = async () => {
      const { success, message, id, nombre } = await autenticar(user);

      console.log({ success });

      if (success) {
        form
          .querySelectorAll(`input:not([type="submit"])`)
          .forEach((input) => (input.value = ""));
        window.alert("Acceso correcto");
        setUserLogged(true);
        console.log(`nombre ${nombre}`);
        console.log(`id ${id}`);
        //rescatar id usuario
        setUserId(id);
        //redirect home
        history.push("/");
      } else {
        window.alert(`No se pudo ingresar. ${message}`);
      }
    };

    login();
  };

  return (
    <>
      <Grid>
        <Paper elevation={5} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LoginIcon></LoginIcon>
            </Avatar>
            <h2>Inicia sesi??n</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              id="email"
              style={textFieldStyle}
              variant="standard"
              label="Correo"
              placeholder="Ingrese su correo"
              fullWidth
              required
            />
            <TextField
              name="password"
              id="password"
              style={textFieldStyle}
              variant="standard"
              label="Contrase??a"
              placeholder="Ingrese su contrase??a"
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
              Iniciar sesi??n
            </Button>
          </form>
          <Typography style={typographyStyle} fullWidth>
            {/* //! Gabriel: Corregido redirect */}
            ??No tienes cuenta?{" "}
            <ReactLink to="/registro">
              <Link>Reg??strate</Link>{" "}
            </ReactLink>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
