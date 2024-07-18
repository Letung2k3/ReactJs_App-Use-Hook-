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
        render() {
                return (
                        <>
                                <UserInfo />
                                <br />
                                <br />
                                <DisplayInfo listUsers={this.state.listUsers} />
                        </>
                )
        }
}
export default MyComponent;