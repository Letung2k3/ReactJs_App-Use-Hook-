import ModelCreateUser from "./ModelCreateUser";

const ManageUser = (props) => {
     return (
          <div className="manage-user-container">
               <div className="manage-user-title">
                    Manage User
               </div>
               <div className="manage-user-content">
                    <div className="manage-btn">
                         <ModelCreateUser />
                    </div>
                    <div className="manage-table">
                         <div>Table</div>
                    </div>
               </div>
          </div>
     )
}
export default ManageUser;