import React from "react";
class DisplayInfo extends React.Component {
        render() {
                let { listUsers } = this.props

                return (
                        <div>
                                Display Information!
                                <table>
                                        {listUsers && listUsers.length > 0
                                                ?
                                                listUsers.map((item, index) => {
                                                        return (
                                                                <tr key={item.id}>
                                                                        {index + 1} - {item.name} - {item.age}
                                                                </tr>
                                                        )
                                                })
                                                :
                                                <tr>No data props down this!</tr>
                                        }
                                </table>
                        </div>
                )
        }
}
export default DisplayInfo;