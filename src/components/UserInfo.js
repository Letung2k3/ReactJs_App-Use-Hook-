import React, { useState } from "react";
import '../Assets/UserInfo.scss'
// class UserInfo extends React.Component {
//         state = {
//                 name: "Dotatq",
//                 age: 16,
//         }

//         handleOnChangeInputName = (event) => this.setState({
//                 name: event.target.value,

//         })
//         handleOnChangeInputAge = (Event) => this.setState({

//                 age: Event.target.value
//         })

//         handleSubmit = (Event) => {
//                 Event.preventDefault();
//         }
//         handleAddUser = (event) => {
//                 this.props.addUser({
//                         id: Math.floor(Math.random() * 1000) + 1,
//                         name: this.state.name,
//                         age: this.state.age
//                 })
//         }
//         render() {
//                 let { name, age } = this.state
//                 return (
//                         <div className="container">
//                                 <form onClick={(event) => this.handleSubmit(event)} className="form_submit">
//                                         <label className="label_name">Name  &nbsp;</label>
//                                         <input
//                                                 className="form_input"
//                                                 value={name}
//                                                 type="text"
//                                                 onChange={(Event) => this.handleOnChangeInputName(Event)}
//                                                 placeholder="Input name..."
//                                         />
//                                         &nbsp;
//                                         &nbsp;
//                                         <label className="label_name">Age  &nbsp;</label>
//                                         <input
//                                                 className="form_input"
//                                                 value={age}
//                                                 type="text"
//                                                 onChange={(Event) => this.handleOnChangeInputAge(Event)}
//                                                 placeholder="Input age..."
//                                         />
//                                         &nbsp;
//                                         <button className="form_btn" onClick={(event) => this.handleAddUser(event)}>Add</button>
//                                 </form>
//                         </div>

//                 )
//         }
// }
const UserInfo = (props) => {
        let { addUser } = props;
        const [name, setName] = useState('');
        const [age, setAge] = useState(0);
        const handleOnChangeInputName = (event) => {
                setName(event.target.value)
        }

        const handleOnChangeInputAge = (Event) => {
                setAge(Event.target.value)
        }


        const handleSubmit = (Event) => {
                Event.preventDefault();
        }
        const handleAddUser = (event) => {
                addUser({
                        id: Math.floor(Math.random() * 1000) + 1,
                        name: name,
                        age: age
                })
        }
        return (
                <div className="container">
                        <form onClick={(event) => handleSubmit(event)} className="form_submit">
                                <label className="label_name">Name  &nbsp;</label>
                                <input
                                        className="form_input"
                                        value={name}
                                        type="text"
                                        onChange={(Event) => handleOnChangeInputName(Event)}
                                        placeholder="Input name..."
                                />
                                &nbsp;
                                &nbsp;
                                <label className="label_name">Age  &nbsp;</label>
                                <input
                                        className="form_input"
                                        value={age}
                                        type="text"
                                        onChange={(Event) => handleOnChangeInputAge(Event)}
                                        placeholder="Input age..."
                                />
                                &nbsp;
                                <button className="form_btn" onClick={(event) => handleAddUser(event)}>Add</button>
                        </form>
                </div>

        )
}
export default UserInfo;