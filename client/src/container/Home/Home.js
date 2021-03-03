import React from 'react'

import "./Home.css";
import Items from '../Items/Items';
import Header from '../../components/Header/Header'

const Home = () => {
    return(
        <>
            <Header/>
            <Items/>
        </>
    );
}

export default Home;