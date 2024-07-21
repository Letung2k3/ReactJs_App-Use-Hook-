import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
        state = {
                listUsers: [
                        { id: 1, name: "Doatq", age: 18 },
                        { id: 2, name: "Doatq23", age: 19 },
                        { id: 3, name: "Doatq2", age: 17 },
                ]
        }
        addUser = (obj) => {
                this.setState({
                        listUsers: [...this.state.listUsers, obj]
                })
        }
        deleteUser = (obj) => {
                let copyListUser = this.state.listUsers;
                copyListUser = copyListUser.filter((item) => item.id !== obj.id);
                this.setState({
                        listUsers: copyListUser
                })
        }
        render() {
                return (
                        <>
                                <UserInfo
                                        addUser={this.addUser}
                                />
                                <DisplayInfo
                                        listUsers={this.state.listUsers}
                                        deleteUser={this.deleteUser}
                                />
                        </>
                )
        }
}
export default MyComponent;