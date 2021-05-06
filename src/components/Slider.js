import { IconButton, makeStyles } from '@material-ui/core';
import React,{useEffect, useState,useRef} from 'react'

import {imagesSlider} from '../Images';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles=makeStyles((theme)=>({
    root:{
        background:"lightyellow",
        borderTop:"15px solid #333333",
        borderBottom:"15px solid #333333",
        borderRight:"15px solid #333333",
        height:"500px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            marginRight:0,
            display:"block",
            border:"none",
        }
    },
    /* 640*426 */
    slider:{
        height:"calc(426px / 1.15)",
        width:"calc(640px / 1.15)",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        [theme.breakpoints.down("xs")]:{
            height:"calc(426px / 1.5)",
            width:"calc(640px / 1.5)",
        }
    },
    imageSlider:{
        width:"100%",
        height:"100%",
        transition:"10s ease-in-out"
    },
    containerBtns:{
        marginTop:"0.4rem"
    },
    btn:{
        fontSize:"2rem",
        color:"rgba(0,0,0,0.6)"
    },
    wrapper:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"1rem",
    }
    
}))
function Slider() {
    const classes=useStyles();
    const [current,setCurrent]=useState(0);
    const length=imagesSlider.length;
    const timer=useRef(null);


    useEffect(()=>{
        const nextImage= () => setCurrent(current=== length-1 ? 0 : current+1);
        timer.current=setTimeout(nextImage,3000);
        return function (){
            if(timer.current){
                clearTimeout(timer.current);
            }
        }
    },[current,length])

    const handleBack= () =>{
        setCurrent(current=== 0 ? length-1 : current-1);
        
    }
    const handleForward= () =>{
        setCurrent(current=== length-1 ? 0 : current+1);
    }

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.slider}>
                    <img src={imagesSlider[current]} className={classes.imageSlider} alt={`pic${current+1}`}/>
                    <div className={classes.containerBtns}>
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon className={classes.btn}/> 
                        </IconButton>
                        <IconButton onClick={handleForward}>
                            <ArrowForwardIcon className={classes.btn}/>   
                        </IconButton>
                    </div>
                </div>
            </div>
                   
        </div>
    )
}

export default Slider
