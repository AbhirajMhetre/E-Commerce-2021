import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';

import './AdminHeader.css';
import CreateProduct from '../../Admin/CreateProduct/CreateProduct';


const AdminHeader = () => {

    const [openCreateModel, setOpenCreateModel] = useState(false);

    const handleOpenCreateModel = () => {
        setOpenCreateModel(true)
    }

    const handleCloseCreateModel = () => {
        setOpenCreateModel(false)
    }

    return(
        <div className="admin-header">
           <Button 
                variant="outlined"
                color='inherit'
                onClick={handleOpenCreateModel}
            >
               Create Product
           </Button>
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