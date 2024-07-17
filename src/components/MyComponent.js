import React from "react";
class MyComponent extends React.Component {
        state = {
                name: "",
                age: 16,
        }

        handleBtnMouseOver = (Event) => {
                console.log(Event.target);
        }
        handleOnChangeInput = (event) => this.setState({
                name: event.target.value,
                age: Math.floor(Math.random() * 100) + 1
        })

        handleSubmit = (Event) => {
                Event.preventDefault();
                console.log(">>Check form submit!")
        }

        render() {
                let { name, age, id } = this.state
                return (
                        <>
                                <div >
                                        My name is {name} and age: {age}
                                        <form onClick={(event) => this.handleSubmit(event)}>
                                                <input
                                                        type="text"
                                                        onChange={(Event) => this.handleOnChangeInput(Event)}
                                                        placeholder="Input name..."
                                                />
                                                <button>Submit</button>
                                        </form>
                                </div>

                        </>
                )
        }
}
export default MyComponent;