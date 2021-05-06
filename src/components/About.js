import React from 'react'
import {Grid, makeStyles, Typography} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

import Slider from './Slider'
const useStyles=makeStyles((theme)=>({
    root:{
        display:"block",
        overflow:"hidden",
    },
    contentCentered:{
        padding:"2rem",
        background:"#f3eae8",
        maxHeight:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    text:{
        fontFamily:"Nunito,sans-serif",
        fontWeight:"600",
        fontSize:"1.2rem",
        textAlign:"center",
        [theme.breakpoints.down("xs")]:{
            fontSize:"1rem"
        }
    },
    btn:{
        display:"block",
        fontFamily:"Nunito,sans-serif",
        textDecoration:"none",
        marginTop:"1rem",   
        padding:"0.5rem 1rem",
        background:"#000a1d",
        cursor:"pointer",
        color:"#fff",
        borderRadius:"25px",
        transition:"0.4s ease-in-out",
        "&:hover":{
            transform:"translateY(-1.5px)",
            background:"#cda434"
        }
    },
    wrapper:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            display:"block",
        }
    },
    wrappContainer:{
        paddingTop:"2.5rem",
        marginBottom:"2rem",
        [theme.breakpoints.down("sm")]:{
            marginTop:"2rem",
        }
    }

}))
function About() {
    const classes=useStyles();
    return (
        <div className={classes.root} id="about">
            <Grid container className={classes.wrappContainer}>
                <Grid item xs={12} md={6} className={classes.contentLeft}>
                    <Fade left>
                        <div className={classes.wrapper}>
                            <div className={classes.contentCentered}>
                                        <Typography variant="h6" className={classes.text}>
                                            Right now more than 2 million photos are being taken ... 
                                        </Typography>
                                        <Typography variant="h6" className={classes.text}>
                                            What are you waiting for?
                                        </Typography>
                                        <Typography variant="h6" className={classes.text}>
                                            Join in our team and show the world, the best photos you've ever taken!
                                        </Typography>
                                        <Link to="/register" className={classes.btn}>
                                            Register
                                        </Link>
                            </div>  
                        </div>
                    </Fade>                 
                </Grid>
                <Grid item xs={12} md={6} className={classes.wrappContainer}>
                    <Fade right>
                        <Slider />
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
