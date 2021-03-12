import React from 'react';

import './AdminPage.css';
import AdminHeader from '../../components/Header/AdminHeader/AdminHeader';
import AdminProducts from '../../components/Admin/AdminProducts/AdminProducts'

const AdminPage = () => {   
    return(
        <div className="admin-page">
            <AdminHeader/>
            <AdminProducts/>
        </div>
    );
}

export default AdminPage;