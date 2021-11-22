import React, { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component
{

    constructor(props)
    {super(props)
        this.state = {
            persons: []
        }
    }

    componentDidMount()
    {
        this.getPersons()
    }

    getPersons = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(response =>
            {
                console.log(response.data);
                let persons= response.data.results;
                this.setState({persons});
            })
            .catch(error => console.log(error))
    }

    render() {

        return (
            <div>
                {
                    this.state.persons.map(p => (
                        <div>
                            <title>
                                Robbi LAB!
                            </title>
                            <h1>User Name:{p.name.title}</h1>
                            <title>
                                Details
                            </title>
                            <h2>User Address: {p.location.number} {p.location.name}, {p.location.city}, {p.location.country}</h2>
                            <h2>Time Zone: {p.timeZone}</h2>

                            <title>More Details</title>
                            <h2>User Age: {p.age}</h2>
                            <h2>Phone: {p.phone}</h2>

                            <h2>Email: {p.email}</h2>
                        </div>
                    ))
                }
            </div>
        )
    }
}
