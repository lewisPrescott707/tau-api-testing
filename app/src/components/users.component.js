import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(res => {
                this.setState({ usersCollection: res.data.users });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usersCollection.map((data, i) => {
                                return (
                                <tr key={i}>
                                    <td>
                                        {data._id}
                                    </td>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>
                                        {data.email}
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}