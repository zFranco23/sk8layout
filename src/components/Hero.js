import { makeStyles, Typography, IconButton, Collapse } from '@material-ui/core';
import React, { useEffect,useState } from 'react'
import {Link as Scroll} from 'react-scroll'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {Hero2 as HeroImage} from '../Images';

const useStyles=makeStyles(()=>({
    hero:{
        height:"100vh",
        backgroundImage:`url(${HeroImage})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        overflow:"hidden",
        position:"relative",
        objectFit:"cover",
        "&:before": {
            content:'""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom:0,
            backgroundColor:"rgba(0,0,0,0.5)"
          }
    },
    heroContent:{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    contentWrapper:{
        position:"relative",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    title:{
        padding:"1rem",
        fontFamily:"Nunito,sans-serif",
        fontSize:"2rem",
        color:"#fff",
    },
    expandContent:{
        fontSize:"4rem", 
        color:"#cda434",
        transition:"0.8s ease-in-out",
        "&:hover":{
            color:"black"
        },  
    }
}))

function Hero() {
    const [checked,setChecked]=useState(false);

    useEffect(()=>{
        setChecked(true);
    },[])
    const classes=useStyles();
    return (
        <div className={classes.hero}>
            <div className={classes.heroContent}>
                <Collapse
                    in={checked}
                    {...(checked ? { timeout: 2000 } : {})}
                >
                    <div className={classes.contentWrapper}>
                        <Typography className={classes.title}>
                            Take part on this adventure
                        </Typography>
                        <Scroll to="about" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.expandContent}/> 
                            </IconButton>
                        </Scroll>
                        
                    </div>
                    
                </Collapse>           
            </div>
        </div>
    )
}

export default Hero
