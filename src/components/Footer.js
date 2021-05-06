
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles((theme)=>({
    root:{
        fontFamily:"Nunito,sans-serif",
        color:"#fff",
        background:"#333333",
        overflow:"hidden"
    },
    logo:{
        fontSize:"1.5rem",
        fontStyle:"italic",
        textTransform:"uppercase",
        cursor:"pointer",
        [theme.breakpoints.down("xs")]:{
            textAlign:"center"
        }
    },
    container:{
        padding:"2rem"
    },
    content:{
        display:"flex",
        justifyContent:"center"
    },
    containerIcons:{
        display:"flex",
        justifyContent:"center",
        "& i":{
            display:"block",
            fontSize:"2rem",
            textAlign:"center",
            margin:"0 1.5rem",
            cursor:"pointer",
            transition:"all 0.4s ease-in-out",
            "&:hover":{
                color:"#cda434",
                transform:"scale(1.05)"
            },
            [theme.breakpoints.down("xs")]:{
                margin:"0 2rem",
            }    
        }
    },
    border:{
        borderRight:"2px solid #fff",
        [theme.breakpoints.down("xs")]:{
            border:"none"
        }
    },
}))

function Footer() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grid container spacing={3} className={classes.content}>
                    <Grid item xs={12} sm={4} md={4} className={classes.border}>
                        <Typography className={classes.logo}>
                            SK8PH
                        </Typography>   
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className={classes.border}>

                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Container className={classes.content}>
                            <div className={classes.containerIcons}>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>         
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
