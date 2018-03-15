const productList = ["Apple", "Bannana", "Orange"]


// const Myproducts = () => {
//     const myArrayProducts = [];
//     productList.forEach((product, index) =>{  
       
//     myArrayProducts.push(<Products name={name} key={index}/>)
//     })
//     return myArrayProducts
// }
// console.log(Myproducts());

const Myproducts = () => {
    return productList.map((product, index) => {
        const {name} = product.toUpperCase();
        console.log(name);
        
        return <Products />
    })
}





const Products = (props) => {
    const {name, index} = props
    console.log(props);
    
    return <li key={index}>{name}</li>
}





const ShoppingList = () => {
    return (
        <ul>
            {Myproducts()} 
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