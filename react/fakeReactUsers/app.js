
const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                © 2014 Copyright Text
          </div>
        </footer>
    )
}

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
            </div>
        </nav>
    )
}

const User = (props) => {
    console.log(props);
    

    // return (
    //     <div>
    //         <p>{props.data[0].name}</p>
    //         <p>{props.data[0].email}</p>
    //         <p>{props.data[0].birthday}</p>
    //     </div>
    // )
}

const UsersList = (props) => {
    // const { name, email, dob } = props.data
    // console.log(props.data[0]);
    

    // const getDateOfBirth = () => {
    //     const date = new Date(dob);

    //     return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
    // }

    return (
        <div className="userList">
            <User data={users} />
        </div>
    )
    // return (
    //     <div className="userList">
    //         <User data={users} />
    //     </div>
    // )
}

const Main = ({data}) => {
    return (
        <div className="container">
            <UsersList data={users} />
        </div>
    )
}

const App = ({data}) => {
    // console.log(users);
    
    return (
        <div>
            <Header />
            <Main data={users} />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App data={users} />, document.querySelector('.root'));