import React from 'react';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Avatar, Button, TextField} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Registro = () => {
    const paperStyle = {padding: 20, height:'50vh', width: 280, margin:'20px auto' }
    const avatarStyle = {backgroundColor:'#d83f87'}
    const textFieldStyle = {margin: 5}
    const buttonStyle = {marginTop: 25}
    return (
        <>
            <Grid>
                <Paper elevation={5} style={paperStyle}>
                    <Grid align = 'center'>
                        <Avatar style={avatarStyle}><PermIdentityIcon></PermIdentityIcon></Avatar>
                        <h2>Regístrate</h2>
                    </Grid>
                    <TextField style={textFieldStyle} variant="standard" label='Nombre' placeholder='Ingrese su nombre' fullWidth required/>
                    <TextField style={textFieldStyle} variant="standard" label='Correo' placeholder='Ingrese su correo' fullWidth required/>
                    <TextField style={textFieldStyle} variant="standard" label='Contraseña' placeholder='Ingrese su contraseña' type='password' fullWidth required/>
                    <TextField style={textFieldStyle} variant="standard" label='Contraseña2' placeholder='Repita su contraseña' type='password' fullWidth required/>
                    <Button style={buttonStyle} type='submit' variant="outlined" fullWidth sx={{color:'#d83f87', borderColor:'#d83f87'}}>Crear cuenta</Button>
                </Paper>
            </Grid>
        </>
    );
}

export default Registro;
