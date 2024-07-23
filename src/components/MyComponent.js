import React, { useState } from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
// class MyComponent extends React.Component {
//         state = {
//                 listUsers: [
//                         { id: 1, name: "Doatq", age: 18 },
//                         { id: 2, name: "Doatq23", age: 19 },
//                         { id: 3, name: "Doatq2", age: 17 },
//                 ]
//         }
//         addUser = (obj) => {
//                 this.setState({
//                         listUsers: [...this.state.listUsers, obj]
//                 })
//         }
//         deleteUser = (obj) => {
//                 let copyListUser = this.state.listUsers;
//                 copyListUser = copyListUser.filter((item) => item.id !== obj.id);
//                 this.setState({
//                         listUsers: copyListUser
//                 })
//         }
//         render() {
//                 return (
//                         <>
//                                 <UserInfo
//                                         addUser={this.addUser}
//                                 />
//                                 <DisplayInfo
//                                         listUsers={this.state.listUsers}
//                                         deleteUser={this.deleteUser}
//                                 />
//                         </>
//                 )
//         }
// }
const MyComponent = (props) => {
        const [listUsers, setListUsers] = useState([
                { id: 1, name: "Doatq", age: 18 },
                { id: 2, name: "Doatq23", age: 19 },
                { id: 3, name: "Doatq2", age: 17 },
        ]);

        const addUser = (obj) => {
                setListUsers([...listUsers, obj])
        }
        const deleteUser = (obj) => {
                let copyListUser = listUsers;
                copyListUser = copyListUser.filter((item) => item.id !== obj.id);
                setListUsers(copyListUser)
        }
        return (
                <>
                        <UserInfo
                                addUser={addUser}
                        />
                        <DisplayInfo
                                listUsers={listUsers}
                                deleteUser={deleteUser}
                        />
                </>
        )
}
export default MyComponent;