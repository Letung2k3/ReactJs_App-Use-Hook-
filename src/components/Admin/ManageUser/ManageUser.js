import ModelCreateUser from "./ModelCreateUser";
import ModelUpdateUser from "./ModelUpdateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react"
import { getUserPaginate } from '../../../services/apiService'
// import TableListUser from "../Table/TableListUser";
import ModelViewUser from "./ModelViewUser";
import ModelDeleteUser from "./ModelDeleteUser";
import TableUserPaginate from "../Table/TableUserPaginate";
const ManageUser = (props) => {
     const LIMIT_USER = 5
     const [pageCount, setPageCount] = useState(6);
     const [currentPage, setCurrentPage] = useState(1)
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
          fetchDataPaginate(1)
          // fetchData()
     }, [])

     // const fetchData = async () => {
     //      let res = await getUser();
     //      console.log(res);
     //      if (res && res.EC === 0) {
     //           setListUser(res.DT)
     //      }
     // }
     const fetchDataPaginate = async (page) => {
          let res = await getUserPaginate(page, LIMIT_USER);
          if (res.EC === 0) {
               console.log(">>>Check data: ", res);
               setListUser(res.DT.users)
               setPageCount(res.DT.totalPages)
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
                              {/* <TableListUser
                                   listUser={listUser}
                                   handleClickBtnEdit={handleClickBtnEdit}
                                   handleClickBtnView={handleClickBtnView}
                                   handleClickBtnDelete={handleClickBtnDelete}
                              /> */}

                              <TableUserPaginate
                                   listUser={listUser}
                                   handleClickBtnEdit={handleClickBtnEdit}
                                   handleClickBtnView={handleClickBtnView}
                                   handleClickBtnDelete={handleClickBtnDelete}
                                   fetchDataPaginate={fetchDataPaginate}
                                   pageCount={pageCount}
                                   currentPage={currentPage}
                                   setCurrentPage={setCurrentPage}
                              />
                         </div>
                    </div>
                    <ModelCreateUser
                         show={showModalCreateUser}
                         setShow={handleShowHide}
                         fetchDataPaginate={fetchDataPaginate}
                         currentPage={currentPage}
                         setCurrentPage={setCurrentPage}
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
                         fetchDataPaginate={fetchDataPaginate}
                         resetUpdateData={resetUpdateData}
                         currentPage={currentPage}
                         setCurrentPage={setCurrentPage}
                    />
                    <ModelDeleteUser
                         show={showModalDeleteUser}
                         setShow={handleShowHide}
                         fetchDataPaginate={fetchDataPaginate}
                         dataDelete={dataDelete}
                         currentPage={currentPage}
                         setCurrentPage={setCurrentPage}

                    />
               </div>
          </div>
     )
}
export default ManageUser;