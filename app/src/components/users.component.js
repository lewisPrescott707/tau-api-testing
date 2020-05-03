import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

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

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
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
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}