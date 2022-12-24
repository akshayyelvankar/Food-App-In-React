import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import {Image} from 'react-bootstrap';

const Home = () => {
  
  return (
    
      <div className='h_content'>
      <Image  src='./pexels-adonyi-gábor-1414651.jpg' alt='logo'  className='h_img'></Image>
      <h1 className='h_text'>Food App</h1>
      <NavLink to={'/cards'}>
      <Button variant="primary" className='h_btn' size='md'>Order Now</Button>
      </NavLink>
      </div>
  
  )
}

export default Home;