import React from 'react';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
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
                <IconButton onClick={handleLogOut}><LogoutIcon sx={{ color: "#ffffff" }}></LogoutIcon></IconButton>
            </Avatar>
            <Avatar style={avatarStyle}>
                <Link to={`/usuario/${userId}`}>
                    <IconButton><AccountCircleIcon sx={{ color: "#ffffff" }}></AccountCircleIcon></IconButton>
                </Link>
            </Avatar>
        </>
    );
}

export default UsuarioLogueado;
