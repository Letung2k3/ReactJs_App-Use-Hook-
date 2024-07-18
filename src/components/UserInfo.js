import React from "react";
class UserInfo extends React.Component {
        state = {
                name: "Dotatq",
                age: 16,
        }

        handleOnChangeInputName = (event) => this.setState({
                name: event.target.value,

        })
        handleOnChangeInputAge = (Event) => this.setState({

                age: Event.target.value
        })

        handleSubmit = (Event) => {
                Event.preventDefault();
                console.log(">>Check form submit!")
                console.log(">>>this.state: ", this.state)
        }

        render() {
                let { name, age, id } = this.state
                return (
                        <div>
                                My name is {name} and age: {age}
                                <form onClick={(event) => this.handleSubmit(event)}>
                                        <label>Name</label>
                                        <input
                                                value={name}
                                                type="text"
                                                onChange={(Event) => this.handleOnChangeInputName(Event)}
                                                placeholder="Input name..."
                                        />
                                        &nbsp;
                                        &nbsp;
                                        <label>Age</label>
                                        <input
                                                value={age}
                                                type="text"
                                                onChange={(Event) => this.handleOnChangeInputAge(Event)}
                                                placeholder="Input age..."
                                        />
                                        <br />
                                        <button>Submit</button>
                                </form>
                        </div>

                )
        }
}
export default UserInfo;