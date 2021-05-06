import { 
    Container, 
    Grid, 
    makeStyles, 
    Typography,
    Card,
    CardContent,
    CardMedia
} from '@material-ui/core';
import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import Zoom from 'react-reveal/Zoom';
import {dataGallery} from '../Images';

const useStyles=makeStyles((theme)=>({
    root:{
        display:"block",
        marginBottom:"2rem"
    },
    title:{
        fontFamily:"Nunito,sans-serif",
        textAlign:"center",
        fontWeight:"600",
        fontSize:"2rem"
    },
    cardMedia:{
        paddingTop:"60%",
        cursor:"pointer",
        transition:"0.5s ease-in-out",
        filter:"grayscale(100%)",
        "&:hover":{
            transform:"scale(1.05)",
            filter:"grayscale(0)"
        }
    },
    card:{
        height:"100%",
        marginBottom:"1rem",
        display:"flex",
        flexDirection:"column",
        borderBottom:"0.5rem solid #333333"
    },
    cardContent:{
        margin:"0 auto",
    },
    author:{
        textAlign:"center",
        fontSize:"1.2rem",
        fontWeight:"600",
        fontFamily:"Nunito,sans-serif",
    },
    description:{
        fontFamily:"Nunito,sans-serif",
        textAlign:"center",
    },
    btn:{
        color:"#fff",
        fontFamily:"Nunito,sans-serif",
        textTransform:"uppercase",
        fontWeight:"600",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"1rem",
        marginLeft:"3rem",
        marginRight:"3rem",
        padding:"0.5rem 1rem",
        backgroundColor:"#cda434",
        borderRadius:"25px",
        cursor:"pointer",
        transition:"0.3s ease-in-out",
        "&:hover":{
            backgroundColor:"#bf930d",
            transform:"scale(1.01)"
        },
        
    },
    photoIcon:{
        fontSize:"1.5rem",
        marginLeft:"0.5rem",
        color:"black",
    }
}))
function Sales() {
    const classes=useStyles();
    return (
        <div className={classes.root} id="gallery">
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.title}>Best photos</Typography>
                    </Grid>
                    {dataGallery.map((dataImage,index)=>(
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Zoom>
                                <Card className={classes.card}>
                                    <CardMedia
                                            className={classes.cardMedia}
                                            image={dataImage.image}
                                            title={dataImage.title}    
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" className={classes.author}>{dataImage.author}</Typography>
                                        <Typography variant="subtitle1"className={classes.description}>{dataImage.description}</Typography>
                                        <div className={classes.btn}>
                                            See more
                                            <PhotoCameraIcon className={classes.photoIcon}/>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Zoom>
                        </Grid>            
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Sales
