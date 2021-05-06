import React from 'react'
import {
    Grid, 
    Container, 
    TextField,
    makeStyles, Typography
} from '@material-ui/core';

import {skateContact, photoContact} from '../Images';

import CountUp from 'react-countup';
import Zoom from 'react-reveal/Zoom';

import usePosition from '../usePosition';

const useStyles = makeStyles((theme)=>({
    root:{
        paddingTop:"2rem",
        paddingBottom:"2rem",
    },
    container:{
        background: "linear-gradient(to right, white 0%, white 50%, #f3eae8 50%, #f3eae8 100%)",
        paddingTop:"2rem",
        paddingBottom:"2rem",
        overflow:"hidden",
        [theme.breakpoints.down("sm")]:{
            background: "linear-gradient(to top, white 0%, white 50%, #f3eae8 50%, #f3eae8 100%)",
        }
    },
    title:{
        fontFamily:"Nunito,sans-serif",
        fontSize:"2rem",
        fontWeight:"600",
        textAlign:"center",
        marginBottom:"2rem",
    },
    contact:{
        fontFamily:"Nunito,sans-serif",
        fontWeight:"400",
        textAlign:"center",
    },
    form:{
        marginTop:"1rem",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    btnSubmit:{
        marginTop:"1rem",
        background:"#000a1d",
        color:"#fff",
        padding:"0.5rem 1rem",
        borderRadius:"25px",
        cursor:"pointer",

    },
    count:{
        fontFamily:"Nunito,sans-serif",
        fontWeight:"400",
        fontSize:"3rem",
        color:"#333333",
    },
    contentRight:{
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
    },
    people:{
        fontFamily:"Nunito,sans-serif",
        fontSize:"1.5rem",
        fontWeight:"600",

    },
    change:{
        display:"flex",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column-reverse"
        }
    },
    wait:{
        opacity:0,
        fontFamily:"Nunito,sans-serif",
        fontWeight:"400",
        fontSize:"3rem",
        color:"#333333",
    },
    photos:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"0.5rem",
    },
    skate:{
        color:"red", 
        width:"30%",
        
    },
    photo:{
        width:"30%"
    },
    sideLeft:{
        border:"2px solid #333333",
        padding:"2rem",
        borderRadius:"50px",
        [theme.breakpoints.down("xs")]:{
            marginTop:"4rem"
        }
    },
    sideRight:{
        marginTop:"2rem",
        marginBottom:"2rem",
        [theme.breakpoints.down("xs")]:{
            marginBottom:"4rem"
        }
    }
}))
function Contact() {
    const classes=useStyles();
    const animate=usePosition();
    
    return (
        <div id="contact" className={classes.root}>
           <Typography variant="h5"className={classes.title}>Contact</Typography>
           <div className={classes.container}>         
                    <Grid container spacing={3} className={classes.change}>
                        <Grid item xs={12} md={6}>
                            <Container maxWidth="xs" className={classes.sideLeft}>
                                <Typography variant="h6" className={classes.contact}>Leave us your information , we will contact you!</Typography>
                                <form className={classes.form} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                autoComplete="fname"
                                                variant="outlined"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                required
                                                autoComplete="lname"
                                                variant="outlined"
                                                label="Last Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                required
                                                autoComplete="lemail"
                                                variant="outlined"
                                                label="Email Address"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                required
                                                autoComplete="lemail"
                                                variant="outlined"
                                                label="Phone"
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className={classes.btnSubmit}>
                                        Got it
                                    </div>                   
                                </form>
                            </Container>    
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.sideRight}>
                            <Container maxWidth="xs">
                                <div className={classes.contentRight}>
                                    {animate ?
                                    <Typography variant="h6" className={classes.count}>
                                        <Zoom>
                                            <CountUp duration={2} end={76278} separator=". "/>
                                        </Zoom>    
                                    </Typography> : <Typography variant="h6" className={classes.wait}>a</Typography> 
                                    
                                    }
                                    <Typography className={classes.people}>
                                        People around the world are showing their best photos.  
                                    </Typography>
                                    <Typography className={classes.people}>
                                        Be part of the most big skater culture.
                                    </Typography>
                                    <div className={classes.photos}>
                                        <img src={skateContact} alt="skater" className={classes.skate}/>
                                        <img src={photoContact} alt="photographer" className={classes.photo}/> 
                                    </div>                               
                                </div>                 
                            </Container>
                        </Grid>
                    </Grid>
           </div>            
        </div>
    )
}

export default Contact
