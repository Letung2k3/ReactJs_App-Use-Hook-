import React, { useState, useEffect } from "react";
import '../Assets/DisplayInfo.scss'
import { Link } from "react-router-dom";
// class DisplayInfo extends React.Component {
//         constructor(props) {
//                 console.log(">>>call contructer: 1")
//                 super(props)
//                 //babel compiler
//                 this.state = {
//                         isShowHideButton: false
//                 }
//         }
//         handleButtonDelete = (obj) => {
//                 this.props.deleteUser(obj)
//         }
//         handleHideShow = () => {
//                 this.setState({
//                         isShowHideButton: !this.state.isShowHideButton
//                 })
//         }
//         componentDidMount = () => {
//                 // call api 
//                 console.log(">>>call Componet did mount: 3")
//                 setTimeout((() => {
//                         document.title = "React ToDo List"
//                 }), 3000)
//         }
//         // componentDidUpdate = (prevProps, prevState) => {
//         //         console.log(">>>call Componet did upadate: ", this.props, prevProps)
//         //         if (this.props.listUsers !== prevProps.listUsers) {
//         //                 if (this.prop.listUsers.length == 5) {
//         //                         alert("You got 5 elements")
//         //                 }
//         //         }
//         // }
//         render() {
//                 console.log(">>>Call render:")
//                 let { listUsers } = this.props
//                 let { isShowHideButton } = this.state
//                 return (
//                         <div className="container_display">
//                                 {isShowHideButton === false
//                                         ?
//                                         <button onClick={() => this.handleHideShow()}>Show</button>

//                                         :
//                                         <>
//                                                 {listUsers && listUsers.length > 0
//                                                         &&
//                                                         listUsers.map((user, index) => {
//                                                                 return (
//                                                                         <div key={user.id} className="list_item">
//                                                                                 <span className="item"> {index + 1} - {user.name} - {user.age}</span>  &nbsp; <span><button onClick={() => this.handleButtonDelete(user)} className="btn_item">Delete</button></span>
//                                                                         </div>
//                                                                 )
//                                                         })

//                                                 }
//                                                 <button onClick={() => this.handleHideShow()}>Hide</button>
//                                         </>

//                                 }
//                         </div>
//                 )
//         }
// }
const DisplayInfo = (props) => {
        console.log(">>>Call function:")
        let { listUsers, deleteUser } = props;
        const [isShowHideButton, setShowHideButton] = useState(true)

        const handleButtonDelete = (user) => {
                deleteUser(user);
        }

        const handleHideShow = () => {
                setShowHideButton(!isShowHideButton)
        }
        useEffect(() => {
                if (listUsers.length == 0) {
                        alert("You deleted all list user!")
                }
                console.log(">>>Check used useEffect: ")
        }, [listUsers])
        return (
                <div className="container_display">
                        <div>
                                <span onClick={handleHideShow}>
                                        {isShowHideButton === true ? <button>Hide List User</button> : <button>Show List User</button>}
                                </span>
                        </div>
                        {isShowHideButton
                                &&
                                <>
                                        {listUsers && listUsers.length > 0
                                                &&
                                                listUsers.map((user, index) => {
                                                        return (
                                                                <div key={user.id} className="list_item">
                                                                        <span className="item"> {index + 1} - {user.name} - {user.age}</span>  &nbsp; <span>
                                                                                <button className="btn_item" onClick={() => handleButtonDelete(user)}>Delete</button></span>
                                                                </div>
                                                        )
                                                })

                                        }
                                </>

                        }

                </div>
        )
}
export default DisplayInfo;