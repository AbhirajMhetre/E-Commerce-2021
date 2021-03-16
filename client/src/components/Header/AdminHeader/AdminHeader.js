import React from 'react';

import './AdminHeader.css';
import CreateProduct from '../../Admin/CreateProduct/CreateProduct';


const AdminHeader = () => {
    return(
        <div className="admin-header">
           <CreateProduct/>
        </div>
    );
}

export default AdminHeader;