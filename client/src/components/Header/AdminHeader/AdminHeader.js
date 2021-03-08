import React, { useState } from 'react';
import { IconButton, Modal } from '@material-ui/core';

import './AdminHeader.css';
import CreateProduct from '../../Admin/CreateProduct/CreateProduct';
import DeleteProduct from '../../Admin/DeleteProduct/DeleteProduct'

const AdminHeader = () => {

    const [openCreateModel, setOpenCreateModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);

    const handleOpenCreateModel = () => {
        setOpenCreateModel(true)
    }

    const handleCloseCreateModel = () => {
        setOpenCreateModel(false)
    }

    const handleOpenDeleteModel = () => {
        setOpenDeleteModel(true)
    }

    const handleCloseDeleteModel = () => {
        setOpenDeleteModel(false)
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
           <IconButton 
                color='inherit'
                onClick={handleOpenDeleteModel}
            >
               Delete Product
           </IconButton>
           <Modal
                open={openDeleteModel} 
                onClose={handleCloseDeleteModel}
           >
                <DeleteProduct/>
           </Modal>
        </div>
    );
}

export default AdminHeader;