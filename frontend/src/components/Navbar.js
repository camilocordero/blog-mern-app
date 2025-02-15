import Logocompleto from '../images/Logocompleto.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HouseIcon from '@mui/icons-material/House';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { userLogoutAction } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';




const pages = ['Home', 'Log In'];


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.signIn)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  // log out user
  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <AppBar position="static" sx={{ height: '70px', backgroundColor: 'black' }}>
      <Container>
        {/* principal Menu */}
        <Toolbar disableGutters>
          <img src={Logocompleto} alt="Logo PATATA" style={{ height: '40px', marginRight: '8px'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HouseIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            BLOG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* menu desktop */}
            <Typography onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Inicio
              </Link>
            </Typography>
            <Typography onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
                Registro
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& 	.MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}

                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >


                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/admin/dashboard">Admin </Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/user/dashboard">User </Link></Typography>
                            </MenuItem>
                            {
                                userInfo ?
                                    <MenuItem onClick={logOutUser}>
                                        <Typography textAlign="center" color='#8e67b2'>Log Out </Typography>
                                    </MenuItem>
                                    :
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/login">Login </Link></Typography>
                                    </MenuItem>
                            }

                        </Menu>
                        <Tooltip>
                        <Tooltip title="Abrir WhatsApp">
              <IconButton
                onClick={() => window.open('https://api.whatsapp.com/send?phone=573142005079&text=Hola%20equipo%20Patata%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre...')}
                sx={{ p: 1, color: 'white' }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Abrir Instagram">
              <IconButton
                onClick={() => window.open('https://www.instagram.com/patatacaricaturas/')}
                sx={{ p: 1, color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;