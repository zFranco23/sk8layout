import { makeStyles, IconButton} from '@material-ui/core';
import React from 'react'

import CloseIcon from '@material-ui/icons/Close';

const useStyles=makeStyles((theme)=>({
    root:{
        position:"fixed",
        zIndex:"9999",
        width:"100%",
        height:"100%",
        top:0,
        background:"#eeefe2",
        justifyContent:"center",
        alignItems:"center",
        display:"none",
        opacity:1,
        transition:"0.6s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            display:"flex"
        }
    },
    rootHide:{
        position:"fixed",
        zIndex:"9999",
        width:"100%",
        height:"100%",
        top:"-100%",
        background:"#eeefe2",
        justifyContent:"center",
        alignItems:"center",
        display:"none",
        opacity:0,
        transition:"0.7s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            display:"flex"
        }
    },
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"
    },
    link:{
        background:"none",
        border:"none",
        cursor:"pointer",
        fontFamily:"Nunito,sans-serif",
        fontSize:"2rem",
        marginTop:"2rem"
    },
    close:{
        position:"absolute",
        top:1,
        left:12
    },
    closeIcon:{
        fontSize:"2rem",
    }
}))
function DropdownMenu({visible,handleVisible}) {
    const classes=useStyles();


     const drawDropMenu= () => {
        if(visible){
            return (<div className={classes.root}>
                <IconButton className={classes.close} onClick={handleVisible}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton> 
                <div className={classes.content}>
                    <button className={classes.link}>
                        About
                    </button>
                    <button className={classes.link}>
                        Sales
                    </button>
                    <button className={classes.link}>
                        Contact us
                    </button>
                </div>          
            </div>)
        }else{
            return (<div className={classes.rootHide}>
                <IconButton className={classes.close} onClick={handleVisible}>
                    <CloseIcon className={classes.closeIcon}/>
                </IconButton> 
                <div className={classes.content}>
                    <button className={classes.link}>
                        About
                    </button>
                    <button className={classes.link}>
                        Sales
                    </button>
                    <button className={classes.link}>
                        Contact us
                    </button>
                </div>          
            </div>)
        }
    } 

    return (
       <>
       {drawDropMenu()}
       </>
    )
}

export default DropdownMenu
