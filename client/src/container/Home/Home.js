import React from 'react'

import "./Home.css";
import Products from '../../components/Products/Products';
import Header from '../../components/Header/Header'

const Home = () => {
    return(
        <>
            <Header/>
            <Products />
        </>
    );
}

export default Home;