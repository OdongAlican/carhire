import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface IModalComponent {
    children: React.ReactNode
    style: Record<string, string | number>
    open: boolean
    handleClose: () => void
}

export default function ModalComponent({ children, style, open, handleClose }: IModalComponent) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}