
import {makeStyles, AppBar, Toolbar, IconButton} from '@material-ui/core'
import React from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import SortIcon from '@material-ui/icons/Sort';


/*Images*/
import {Logo} from '../Images';

const useStyles=makeStyles((theme)=>({
    appbar:{
        zIndex:2,
        background:"none"
    },
    toolbar:{
        justifyContent:"space-between",
        alignItems:"center",
        [theme.breakpoints.down("xs")]:{
            justifyContent:"flex-start"
        }
    },
    logo:{
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    iconLogo:{
        width:"50px",
        color:"#fff",
    },
    btn:{
        fontFamily:"Nunito,sans-serif",
        display:"block",
        padding:"0.5rem 1rem",
        background:"#000a1d",
        cursor:"pointer",
        borderRadius:"25px",
        transition:"0.4s ease-in-out",
        "&:hover":{
            transform:"translateY(-1.5px)"
        },
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    btnesContainer:{
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    btnes:{
        display:"inline-block",
        textTransform:"uppercase",
        textDecoration:"none",
        fontFamily: "Nunito, sans-serif",
        color:"#fff",
        fontWeight:"600",
        letterSpacing:"0",
        marginRight:"1rem",
        transition:"0.3s ease-in-out",
        "&:hover":{
            transform:"scale(1.10)"
        },
    },
    menu:{
        display:"none",
        color:"black",
        transition:"0.3s",
        [theme.breakpoints.down("xs")]:{
            display:"block",
        }
    },
    menuIcon:{
        fontSize:"2rem",
    }
}))
function Navbar({handleVisible}) {
    const classes=useStyles();
    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <IconButton className={classes.logo}>
                    <i>
                        <img src={Logo} className={classes.iconLogo} alt="iconLogo"/>
                    </i>
                </IconButton>
                <div className={classes.btnesContainer}>
                    <Link to="/login"className={classes.btnes} >Log in</Link>
                    <Link to="/"className={classes.btnes} >Home</Link> 
                    <Link to="/register" className={classes.btnes} >Register</Link>
                </div>
                <Scroll to="contact" smooth={true}>
                    <div className={classes.btn}>
                        Contact us
                    </div>
                </Scroll>

                <IconButton className={classes.menu} onClick={handleVisible}>
                    <SortIcon className={classes.menuIcon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
