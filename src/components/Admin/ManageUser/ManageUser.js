import ModelCreateUser from "./ModelCreateUser";
import ModelUpdateUser from "./ModelUpdateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react"
import { getUser } from "../../../services/apiService"
import TableListUser from "../Table/TableListUser";
const ManageUser = (props) => {
     const [listUser, setListUser] = useState([])
     const [showModalCreateUser, setShowModalCreateUser] = useState(false);
     const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
     const [dataUpdate, setDataUpdate] = useState({})

     const handleClickBtnEdit = (user) => {
          setShowModalUpdateUser(true)
          setDataUpdate(user)
          console.log(">>>Check props from table: ", dataUpdate)
     }
     const handleShowHide = (value) => {
          setShowModalCreateUser(value);
          setShowModalUpdateUser(value);
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
                              <TableListUser listUser={listUser} handleClickBtnEdit={handleClickBtnEdit} />
                         </div>
                    </div>
                    <ModelCreateUser
                         show={showModalCreateUser}
                         setShow={handleShowHide}
                         fetchData={fetchData}
                    />
                    <ModelUpdateUser
                         show={showModalUpdateUser}
                         setShow={handleShowHide}
                         dataUpdate={dataUpdate}
                         fetchData={fetchData}
                         resetUpdateData={resetUpdateData}
                    />
               </div>
          </div>
     )
}
export default ManageUser;