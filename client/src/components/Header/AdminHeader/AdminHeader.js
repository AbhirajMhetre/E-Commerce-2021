import React, { useState } from 'react';
import { IconButton, Modal } from '@material-ui/core';

import './AdminHeader.css';
import CreateProduct from '../../Admin/CreateProduct/CreateProduct';


const AdminHeader = (props) => {

    const [openCreateModel, setOpenCreateModel] = useState(false);

    const handleOpenCreateModel = () => {
        setOpenCreateModel(true)
    }

    const handleCloseCreateModel = () => {
        setOpenCreateModel(false)
    }

    return(
        <div className="admin-header">
           <IconButton 
                color='inherit'
                onClick={handleOpenCreateModel}
            >
               Create Product
           </IconButton>
           <Modal
                open={openCreateModel} 
                onClose={handleCloseCreateModel}
           >
                <CreateProduct/>
           </Modal>
        </div>
    );
}

export default AdminHeader;