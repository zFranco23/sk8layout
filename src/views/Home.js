import React, { useState } from 'react'


import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
    const [visible,setVisible]=useState(false);

    const handleVisible=()=>{
        setVisible(!visible);
    }
    return (
        <div>
           <Header handleVisible={handleVisible} visible={visible}/>
           <About />
           <Gallery />
           <Contact />
           <Footer />
        </div>
    )
}

export default Home
