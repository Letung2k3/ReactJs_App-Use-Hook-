import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

function ModelDeleteUser(props) {
     const { show, setShow, dataDelete } = props;

     const handleClose = () => setShow(false);
     const handleConfirmDelete = async () => {
          let data = await deleteUser(dataDelete.id);
          if (data && data.EC === 0) {
               toast.success(data.EM)
               handleClose();
               //Wait
               // await props.fetchData()
               props.setCurrentPage(1)
               await props.etchDataPaginate(1)
          }
          else if (data && data.EC !== 0) {
               toast.warning(data.EM)
          }
     }
     return (
          <>
               <Modal
                    show={show}
                    onHide={handleClose}
                    size='xl'
                    backdrop="static"
               >
                    <Modal.Header closeButton>
                         <Modal.Title>Delete an user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>do you want to delete user contain email is <span className='fw-bold'>{dataDelete.email}</span></Modal.Body>
                    <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                              Close
                         </Button>
                         <Button variant="danger" onClick={handleConfirmDelete}>
                              Delete
                         </Button>
                    </Modal.Footer>
               </Modal>
          </>
     );
}

export default ModelDeleteUser;