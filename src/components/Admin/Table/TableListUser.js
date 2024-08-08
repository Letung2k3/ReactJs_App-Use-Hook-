
const TableListUser = (props) => {
     let { listUser } = props
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
                                                  <button className="btn btn-success">View</button>
                                                  <button className="btn btn-info mx-2">Edit</button>
                                                  <button className="btn btn-danger">Delete</button>
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
          </>
     )
}
export default TableListUser
