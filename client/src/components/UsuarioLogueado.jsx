import React from 'react';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const UsuarioLogueado = (props) => {
    const {setUserLogged, userId} = props
    const avatarStyle = { backgroundColor: "#d83f87", margin:5 };

    const handleLogOut = ()=>{
        setUserLogged(false);
        console.log('logout')
    }

    return (
        <>

            <Avatar style={avatarStyle}>
            <Tooltip title="Cerrar sesión">
                <IconButton onClick={handleLogOut}><LogoutIcon sx={{ color: "#ffffff" }}></LogoutIcon></IconButton>
                </Tooltip>
            </Avatar>
            <Avatar style={avatarStyle}>
                <Link to={`/usuario/${userId}`}>
                    <Tooltip title="Mis compras">
                        <IconButton><AccountCircleIcon sx={{ color: "#ffffff" }}></AccountCircleIcon></IconButton>
                    </Tooltip>
                </Link>
            </Avatar>
        </>
    );
}

export default UsuarioLogueado;
