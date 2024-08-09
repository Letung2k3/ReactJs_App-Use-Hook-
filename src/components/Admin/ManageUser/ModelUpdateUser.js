import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiService'
import _ from "lodash"
function ModelUpdateUser(props) {
     //Props
     let { show, setShow, dataUpdate } = props;
     //State
     const [email, setEmail] = useState("");
     const [username, setUsername] = useState("");
     const [image, setImage] = useState("");
     const [role, setRole] = useState("USER")
     const [previewImage, setPreviewImage] = useState("");

     //UseEffect for dataUpdate
     //When state updated then useEffect ran(run passive)
     useEffect(() => {
          console.log(">>>>Check useEffect:")
          if (!_.isEmpty(dataUpdate)) {
               setEmail(dataUpdate.email)
               setRole(dataUpdate.role)
               setUsername(dataUpdate.username)
               if (dataUpdate.image) {
                    setPreviewImage(`data:image/png;base64,${dataUpdate.image}`)
               }
               setImage("")
          }
     }, [dataUpdate])
     //Event function
     const handleClose = () => {
          setShow(false)
          props.resetUpdateData()
     };
     const handleImageEvent = (Event) => {
          // console.log("Check object:", Event.target.files[0])
          if (Event.target && Event.target.files[0]) {
               setPreviewImage(URL.createObjectURL(Event.target.files[0]))
               setImage(Event.target.files[0])
          }
          else {
               // setPreviewImage("")
          }
     }
     const handleSubmitData = async () => {
          //validate
          //call api
          let data = await putUpdateUser(dataUpdate.id, username, role, image)
          console.log("Check res:  ", data);
          if (data && data.EC === 0) {
               toast.success(data.EM)
               handleClose()
               //Wait  update
               await props.fetchData()
          }
          else if (data && data.EC !== 0) {
               toast.error(data.EM)
          }


     }

     console.log(">>check data update from parent: ", props.dataUpdate)
     return (
          <>
               {/* <Button variant="warning" onClick={handleShow}>
                    Create new user
               </Button> */}

               <Modal
                    show={show}
                    onHide={handleClose}
                    size='xl'
                    backdrop="static"
                    className="modal-container"
               >
                    <Modal.Header closeButton>
                         <Modal.Title>Update an user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <form className="row g-3">
                              <div className="col-md-6">
                                   <label for="inputEmail4" className="form-label">Email</label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        disabled={true}
                                        id="inputEmail4"
                                        onChange={(Event) => { setEmail(Event.target.value) }}
                                   />
                              </div>
                              <div className="col-md-6">
                                   <label for="inputPassword4" className="form-label">Password</label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        disabled
                                        id="inputPassword4"
                                   />
                              </div>
                              <div className="col-md-6">
                                   <label for="inputAddress" className="form-label">UserName</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="input UserName..."
                                        value={username}
                                        onChange={(Event) => { setUsername(Event.target.value) }}
                                   />
                              </div>
                              <div className="col-md-4">
                                   <label for="inputState" className="form-label">Role</label>
                                   <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                                        <option value="USER">USER</option>
                                        <option value="Admin">ADMIN</option>
                                   </select>
                              </div>
                              <div className="col-md-12">
                                   <label for="inputAddress" className="form-label label-update" htmlFor='idFile'>
                                        <FcPlus /> Update your image
                                   </label>
                                   <input
                                        onChange={(Event) => handleImageEvent(Event)}
                                        type="file"
                                        hidden id='idFile'
                                   />
                              </div>
                              <div className="col-md-12 img-preview">
                                   {previewImage
                                        ?
                                        <img src={previewImage} />
                                        :
                                        <span>Preview Image</span>
                                   }
                              </div>
                         </form>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                              Close
                         </Button>
                         <Button variant="primary" onClick={() => handleSubmitData()}>
                              Submit
                         </Button>
                    </Modal.Footer>
               </Modal>
          </>
     );
}
export default ModelUpdateUser;