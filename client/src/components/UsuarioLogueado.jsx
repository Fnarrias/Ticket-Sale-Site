import React from "react";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UsuarioLogueado = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { setUserLogged, userId } = props;
  const avatarStyle = { backgroundColor: "#d83f87", margin: 5 };

  const history = useHistory();

  const handleLogOut = () => {
    setUserLogged(false);
    console.log("logout");
    //!agregue history para despues de loguearse se redirijiera a login
    history.push("/login");
  };
  return (
    <>
      <Avatar style={avatarStyle}>
        <Tooltip title="Cerrar sesión">
          <IconButton onClick={handleLogOut}>
            <LogoutIcon sx={{ color: "#ffffff" }}></LogoutIcon>
          </IconButton>
        </Tooltip>
      </Avatar>
      <Avatar style={avatarStyle}>
        <Link to={`/usuario/${userId}`}>
          <Tooltip title="Mis compras">
            <IconButton>
              <AccountCircleIcon sx={{ color: "#ffffff" }}></AccountCircleIcon>
            </IconButton>
          </Tooltip>
        </Link>
      </Avatar>
    </>
  );
};

export default UsuarioLogueado;
