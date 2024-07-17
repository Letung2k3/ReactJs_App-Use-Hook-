import React from "react";
class MyComponent extends React.Component {
        state = {
                name: "le Thanh Tung",
                age: 16,
                id: "000VCM1"
        }
        render() {
                let { name, age, id } = this.state
                return (
                        <div>
                                Hello class Component! {id} -
                                {name} - {age}
                        </div>
                )
        }
}
export default MyComponent;