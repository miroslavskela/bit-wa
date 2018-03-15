const Products = () => {
    return <li>My product</li>
}

const ShoppingList = () => {
    return (
        <ul>
            <Products />
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <h1>Hi from react</h1>
            <ShoppingList />
        </div>
    )
}
const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);