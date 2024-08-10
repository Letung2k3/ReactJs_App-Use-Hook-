import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"


const TableUserPaginate = (props) => {
     let { listUser, pageCount } = props
     const handlePageClick = (event) => {
          props.fetchDataPaginate(+event.selected + 1) // 0 + 1 = 1 if event + 1 = 'event1'
          props.setCurrentPage(+event.selected + 1)
          console.log(`User requested page number ${event.selected}`);
     };
     //Same componentDidMount
     return (
          <>
               <table className="table table-hover table-bordered">
                    <thead>
                         <tr>
                              <th scope="col">No</th>
                              <th scope="col">Email</th>
                              <th scope="col">UserName</th>
                              <th scope="col">Role</th>
                         </tr>
                    </thead>
                    <tbody>
                         {listUser && listUser.length > 0
                              &&
                              listUser.map((item, index) => {
                                   return (
                                        <tr key={item.id}>
                                             <th scope="row">{index + 1}</th>
                                             <td>{item.email}</td>
                                             <td>{item.username}</td>
                                             <td>{item.role}</td>
                                             <td>
                                                  <button
                                                       className="btn btn-success"
                                                       onClick={() => props.handleClickBtnView(item)}
                                                  >
                                                       View</button>
                                                  <button
                                                       className="btn btn-info mx-2"
                                                       onClick={() => props.handleClickBtnEdit(item)}
                                                  >
                                                       Edit</button>
                                                  <button
                                                       className="btn btn-danger"
                                                       onClick={() => props.handleClickBtnDelete(item)}
                                                  >
                                                       Delete</button>
                                             </td>
                                        </tr>
                                   )
                              })
                         }
                         {listUser && listUser.length === 0
                              &&
                              <tr>
                                   <td colSpan={'4'}>Not found data!</td>
                              </tr>
                         }
                    </tbody>
               </table>
               <div className="d-flex justify-content-center">
                    <ReactPaginate
                         nextLabel="Next >"
                         onPageChange={handlePageClick}
                         pageRangeDisplayed={3}
                         marginPagesDisplayed={2}
                         pageCount={pageCount}
                         previousLabel="< Prev"
                         pageClassName="page-item"
                         pageLinkClassName="page-link"
                         previousClassName="page-item"
                         previousLinkClassName="page-link"
                         nextClassName="page-item"
                         nextLinkClassName="page-link"
                         breakLabel="..."
                         breakClassName="page-item"
                         breakLinkClassName="page-link"
                         containerClassName="pagination"
                         activeClassName="active"
                         renderOnZeroPageCount={null}
                         forcePage={props.currentPage - 1}
                    />
               </div>

          </>
     )
}
export default TableUserPaginate
