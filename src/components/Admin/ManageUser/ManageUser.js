import ModelCreateUser from "./ModelCreateUser";
import ModelUpdateUser from "./ModelUpdateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react"
import { getUser } from "../../../services/apiService"
import TableListUser from "../Table/TableListUser";
import ModelViewUser from "./ModelViewUser";
import ModelDeleteUser from "./ModelDeleteUser";
const ManageUser = (props) => {
     const [listUser, setListUser] = useState([])
     const [showModalCreateUser, setShowModalCreateUser] = useState(false);
     const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
     const [showModalViewUser, setShowModalViewUser] = useState(false);
     const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
     const [dataUpdate, setDataUpdate] = useState({})
     const [dataView, setDataView] = useState({})
     const [dataDelete, setDelete] = useState({})

     const handleClickBtnEdit = (user) => {
          setShowModalUpdateUser(true)
          setDataUpdate(user)
          console.log(">>>Check props from table: ", dataUpdate)
     }

     const handleClickBtnView = (user) => {
          setShowModalViewUser(true)
          setDataView(user)
     }
     const handleClickBtnDelete = (user) => {
          setShowModalDeleteUser(true)
          setDelete(user)

     }
     const handleShowHide = (value) => {
          setShowModalCreateUser(value);
          setShowModalUpdateUser(value);
          setShowModalViewUser(value);
          setShowModalDeleteUser(value)
     }
     useEffect(() => {
          fetchData()
     }, [])

     const fetchData = async () => {
          let res = await getUser();
          console.log(res);
          if (res && res.EC === 0) {
               setListUser(res.DT)
          }
     }

     const resetUpdateData = () => {
          setDataUpdate({})
     }
     const resetViewData = () => {
          setDataView({})
     }
     return (
          <div className="manage-user-container">
               <div className="title">
                    Manage User
               </div>
               <div className="user-content">
                    <div className="btn-add-new">
                         <button className="btn btn-warning" onClick={() => setShowModalCreateUser(true)}><FcPlus />Create new user</button>
                    </div>
                    <div className="table-user-container">
                         <div className="table">
                              <TableListUser
                                   listUser={listUser}
                                   handleClickBtnEdit={handleClickBtnEdit}
                                   handleClickBtnView={handleClickBtnView}
                                   handleClickBtnDelete={handleClickBtnDelete}
                              />
                         </div>
                    </div>
                    <ModelCreateUser
                         show={showModalCreateUser}
                         setShow={handleShowHide}
                         fetchData={fetchData}
                    />
                    <ModelViewUser
                         show={showModalViewUser}
                         setShow={handleShowHide}
                         dataView={dataView}
                         resetViewData={resetViewData}
                    />
                    <ModelUpdateUser
                         show={showModalUpdateUser}
                         setShow={handleShowHide}
                         dataUpdate={dataUpdate}
                         fetchData={fetchData}
                         resetUpdateData={resetUpdateData}
                    />
                    <ModelDeleteUser
                         show={showModalDeleteUser}
                         setShow={handleShowHide}
                         fetchData={fetchData}
                         dataDelete={dataDelete}

                    />
               </div>
          </div>
     )
}
export default ManageUser;