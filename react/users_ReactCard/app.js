

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Users</a>
            </div>
        </nav>
    )
}

const UserCard = props => {
    const { name, email, dob, img } = props;

    const date = dob => {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = date.getMonth(); 
        const day = date.getDate(); 
         
        return `${year}-${month}-${day}`
    }

    const emailHide = email => {
        const monkey = email.indexOf("@");
        const hidePart = email.substring(0,3) + "..." + email.substring(monkey - 2);
        return hidePart;
    }

    return (
        <div>   
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={img}/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p>Email: {emailHide(email)}<br/> 
                        Date of birth: {date(dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    )    
    
}

const UserItem = props => {
    const { name, email, dob, img } = props;
    return (
        <div>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={img} alt="" className="circle" />
                    <span className="title">name: {name}</span>
                    <p>email: {email} <br />
                        date of birth: {dob}
                    </p>
                </li>
            </ul>
        </div>
    )
}

const UsersList = props => {
    const { data } = props;
    return (
        <div>
            {data.map((user, index) => {
                // return <UserItem key={index} name={user.name.first} email={user.email} dob={user.dob} img={user.picture.medium} />
                return <UserCard key={index} name={user.name.first} email={user.email} dob={user.dob} img={user.picture.large} />
                
            })}
        </div>
    )
}

const Main = ({ data }) => {
    return (
        <div className="container">
            <div className='row'>
                <UsersList data={data} />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                    </div>
                </div>
            </div>
        </footer>
    )
}

const App = ({ data }) => {
    return (
        <div>
            <Header />
            <Main data={data} />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App data={usersData} />,
    document.querySelector('.root')
)

