import React, { Fragment } from 'react'
import { Component } from 'react'
import { userService } from "../../service/UserService"
import UserList from './UserList'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import Loader from '../loader/Loader'
import Search from '../partials/Search'
import NoUsers from './NoUsers'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            displayCard: false,
            displayGrid: false,
            loader: true,
            searchValue: "",


        }

    }
    handleState = (event) => {
        event.preventDefault()
        const displayCard = !this.state.displayCard;
        const displayGrid = !this.state.displayGrid;
        this.setState.displayCard = localStorage.setItem("display", displayCard);
        this.setState.displayGrid = localStorage.setItem("icon", displayGrid)
        this.setState({ displayCard })
        this.setState({ displayGrid })
    }
    refreshUsers = (event) => {
        this.setState({ loader: true })
        event.preventDefault()
        userService.fetchUsers()
            .then(userList => {
                this.setState({ users: userList, loader: false })
            }).then((users) => {
                localStorage.setItem("users", JSON.stringify(this.state.users))
            })
    }


    componentDidMount() {
        const usersList = localStorage.getItem('users')
        if (usersList) {
            const usersParse = JSON.parse(usersList)

            this.setState({ users: usersParse, loader: false })

        } else {
            userService.fetchUsers()
                .then(userList => {
                    this.setState({ users: userList, loader: false })
                }).then((users) => {
                    localStorage.setItem("users", JSON.stringify(this.state.users))
                })

        }
    }
    componentWillMount() {

        const displayCard = localStorage.getItem("display");
        const displayGrid = localStorage.getItem("icon")

        const card = displayCard === "false" ? false : true;
        const icon = displayGrid === "false" ? false : true;
        this.setState({ displayCard: card })
        this.setState({ displayGrid: icon })


    }

    searchValueChange = (value) => {
        this.setState({ searchValue: value })
    }

    getUsers = () => {
        const { users } = this.state
        const filterUsers = users.filter((user) => {
            return (user.name.first || user.name.last).includes(this.state.searchValue);
        })


        return filterUsers

    }
    userGenderFemale = (callBack) => {
        let female = 0;
        callBack().forEach((user => {
            if (user.gender === "female") {
                female++
            }
        }))
        return female
    }
    userGenderMale = (callBack) => {
        let male = 0;
        callBack().forEach((user => {
            if (user.gender === "male") {
                male++
            }
        }))
        return male
    }

    
    render() {
        return (
            <Fragment>
                <Header handleState={this.handleState} displayGrid={this.state.displayGrid} refreshUsers={this.refreshUsers} />
                {this.state.loader ? false : <Search onSearchValueChange={this.searchValueChange} />}
                <div className="container">
                    <p className="gender">Female:{this.userGenderFemale(this.getUsers)} Male:{this.userGenderMale(this.getUsers)}</p>
                    {this.state.loader ? <Loader /> : <UserList data={this.getUsers()} data1={this.state.displayCard} />}
                </div>
                <Footer />
            </Fragment>
        )
    }
}



export default Main
