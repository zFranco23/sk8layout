import { useEffect, useState, useRef } from "react";

const usePosition = ()=> {
        const[animate,setAnimate]=useState(false);
        const tam=useRef();

        useEffect(()=>{
            tam.current=window.scrollY+document.getElementById("contact").getBoundingClientRect().top;            
        },[])
        function updatePosition(){
            tam.current=window.scrollY+document.getElementById("contact").getBoundingClientRect().top;
            if(document.getElementById("contact").getBoundingClientRect().top < document.getElementById("contact").offsetHeight/3 ){
                setAnimate (true);
            }
        }
        window.addEventListener("scroll",updatePosition);
        if(tam.current){
            window.addEventListener("scroll",updatePosition);
        }
        /* console.log(document.getElementById("header").offsetHeight)
        console.log(document.getElementById("about").offsetHeight)
        console.log(document.getElementById("gallery").offsetHeight) */
        return animate;
}

export default usePosition

