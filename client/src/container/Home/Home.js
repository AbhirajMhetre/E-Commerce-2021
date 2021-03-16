import React from 'react'

import "./Home.css";
import Products from '../../components/Products/Products';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Products />
        </>
    );
}

export default Home;