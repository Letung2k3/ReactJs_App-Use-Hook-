import React from "react";
import '../Assets/DisplayInfo.scss'
class DisplayInfo extends React.Component {
        handleButtonDelete = (obj) => {
                this.props.deleteUser(obj)
        }
        render() {
                let { listUsers } = this.props

                return (
                        <div className="container_display">
                                {listUsers && listUsers.length > 0
                                        &&
                                        listUsers.map((user, index) => {
                                                return (
                                                        <div key={user.id} className="list_item">
                                                                <span className="item"> {index + 1} - {user.name} - {user.age}</span>  &nbsp; <span><button onClick={() => this.handleButtonDelete(user)} className="btn_item">Delete</button></span>
                                                        </div>
                                                )
                                        })

                                }
                        </div>
                )
        }
}
export default DisplayInfo;