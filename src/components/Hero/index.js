import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';
import './style.css';

const Hero =props=>{
    return (
        
                    
                        <Card>
                            <div style={{padding:'50px 0'}}>
                            <Logo/>
                            </div>
                            <Navbar/>
                            </Card>
                        
        
        
    );
 }
 
 export default Hero;
