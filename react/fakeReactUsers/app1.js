
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
    const {name, email, img, dob}=props
    console.log(props);
    

    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={img} alt="" className="circle" />
                <span className="title">Name: {name}</span>
                <p>Email: {email} <br />
                    Date of birth: {dob}
                </p>
            </li>
        </ul>
    )


}

const UsersList = ({ data }) => {
    //console.log(users[0].name.first);

    const getDob = (user) => {
        const userDob = user.dob;
        const date = new Date(userDob);
        return date.getMonth()+ 1 + "-" + date.getDate() + "-" + date.getFullYear() ;    
    }
    return (
        <div>
            {users.map(user => <User key={user.dob} name={user.name.first} email={user.email} img = {user.picture.medium} dob={getDob(user)} />)}
            </div>
    )}

const Main = ({ data }) => {
    console.log(users);
    
    return (
        <div className="container">
            <UsersList data={users} />
        </div>
    )
}

const App = ({ data }) => {
    //console.log(users);

    return (
        <div>
            <Header />
            <Main data={users} />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App data={users} />, document.querySelector('.root'));