import React from 'react';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

const UsuarioLogueado = (props) => {
    const {setUserLogged, userid} = props
    const avatarStyle = { backgroundColor: "#d83f87", margin:5 };

    const handleLogOut = ()=>{
        setUserLogged(false);
        console.log('logout')
    }

    return (
        <>

            <Avatar style={avatarStyle}>
                <IconButton onClick={handleLogOut}><LogoutIcon sx={{ color: "#ffffff" }}></LogoutIcon></IconButton>
            </Avatar>
            <Avatar style={avatarStyle}>
                <IconButton><AccountCircleIcon sx={{ color: "#ffffff" }}></AccountCircleIcon></IconButton>
            </Avatar>
        </>
    );
}

export default UsuarioLogueado;
