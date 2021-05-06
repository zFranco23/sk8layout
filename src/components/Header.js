import React from 'react'

import Navbar from './Navbar';
import Hero from './Hero';
import DropdownMenu from './DropdownMenu';

function Header({visible,handleVisible}) {
    return (
        <div id="header">
            <Navbar handleVisible={handleVisible} />
            <Hero />
            <DropdownMenu visible={visible} handleVisible={handleVisible}/>
        </div>
    )
}

export default Header
