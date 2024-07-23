import React from "react";
import '../Assets/DisplayInfo.scss'
class DisplayInfo extends React.Component {
        constructor(props) {
                console.log(">>>call contructer: 1")
                super(props)
                //babel compiler
                this.state = {
                        isShowHideButton: false
                }
        }
        handleButtonDelete = (obj) => {
                this.props.deleteUser(obj)
        }
        handleHideShow = () => {
                this.setState({
                        isShowHideButton: !this.state.isShowHideButton
                })
        }
        componentDidMount = () => {
                // call api 
                console.log(">>>call Componet did mount: 3")
                setTimeout((() => {
                        document.title = "React ToDo List"
                }), 3000)
        }
        // componentDidUpdate = (prevProps, prevState) => {
        //         console.log(">>>call Componet did upadate: ", this.props, prevProps)
        //         if (this.props.listUsers !== prevProps.listUsers) {
        //                 if (this.prop.listUsers.length == 5) {
        //                         alert("You got 5 elements")
        //                 }
        //         }
        // }
        render() {
                console.log(">>>Call render:")
                let { listUsers } = this.props
                let { isShowHideButton } = this.state
                return (
                        <div className="container_display">
                                {isShowHideButton === false
                                        ?
                                        <button onClick={() => this.handleHideShow()}>Show</button>

                                        :
                                        <>
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
                                                <button onClick={() => this.handleHideShow()}>Hide</button>
                                        </>

                                }
                        </div>
                )
        }
}
export default DisplayInfo;