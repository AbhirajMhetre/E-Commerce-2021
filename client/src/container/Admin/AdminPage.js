import React from 'react';

import './AdminPage.css';
import AdminHeader from '../../components/Header/AdminHeader/AdminHeader';
import Products from '../../components/Products/Products'

const AdminPage = () => {   
    return(
        <div className="admin-page">
            <AdminHeader/>
            {/* <Products/> */}
        </div>
    );
}

export default AdminPage;