import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import _ from "lodash"
function ModelViewUser(props) {
     //Props
     let { show, setShow, dataView } = props;
     //State
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [username, setUsername] = useState("");
     const [image, setImage] = useState("");
     const [role, setRole] = useState("USER")
     const [previewImage, setPreviewImage] = useState("");

     useEffect(() => {
          if (!_.isEmpty(dataView)) {
               setEmail(dataView.email)
               setImage("")
               if (dataView.image) {
                    setPreviewImage(`data:image/png;base64,${dataView.image}`)
               }
               setRole(dataView.role)
               setUsername(dataView.username)
          }
     }, [dataView])
     //Event function
     const handleClose = () => {
          setShow(false)

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
                         <Modal.Title>View the user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <form className="row g-3">
                              <div className="col-md-6">
                                   <label for="inputEmail4" className="form-label">Email</label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        disabled
                                        value={email}
                                        id="inputEmail4"
                                        onChange={(Event) => { setEmail(Event.target.value) }}
                                   />
                              </div>
                              <div className="col-md-6">
                                   <label for="inputPassword4" className="form-label">Password</label>
                                   <input
                                        type="password"
                                        disabled
                                        className="form-control"
                                        value={password}
                                        id="inputPassword4"
                                        onChange={(Event) => { setPassword(Event.target.value) }}
                                   />
                              </div>
                              <div className="col-md-6">
                                   <label for="inputAddress" className="form-label">UserName</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        disabled
                                        id="inputAddress"
                                        placeholder="input UserName..."
                                        value={username}
                                        onChange={(Event) => { setUsername(Event.target.value) }}
                                   />
                              </div>
                              <div className="col-md-4">
                                   <label for="inputState" className="form-label">Role</label>
                                   <select disabled id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                                        <option value="USER">USER</option>
                                        <option value="Admin">ADMIN</option>
                                   </select>
                              </div>
                              <div className="col-md-12">
                                   <label for="inputAddress" className="form-label label-update" htmlFor='idFile'>
                                        <FcPlus /> Update your image
                                   </label>
                                   <input
                                        disabled
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
                    </Modal.Footer>
               </Modal>
          </>
     );
}
export default ModelViewUser;