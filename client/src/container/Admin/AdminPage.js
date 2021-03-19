import React from 'react';

import './AdminPage.css';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import AdminProducts from '../../components/Admin/AdminProducts/AdminProducts';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';

const AdminPage = () => {   
    return(
        <>
            <AdminNavbar/>
            <div className="admin-page">
                <AdminHeader/>
                <AdminProducts/>
            </div>
        </>
    );
}

export default AdminPage;