import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products : [
            {
               price: 99,
               title: ' Watch',
               qty: 1,
               img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
               id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                id: 2
             },
             {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
                id: 3
             }
        ] 
    }
  }

  handleIncreaseQuantity = (product)=>{
      console.log("hey increase the quantity of the ", product)
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty +=1;

      this.setState({
          products:products
          //products
          // the above line means the same as its above line becasue it has same values
      })

  }

  handleDecreaseQuantity = (product)=>{
      console.log("hey decrease the quantity of the ", product)
      
      const {products} = this.state;
      const index = products.indexOf(product);

      if (products[index].qty == 0){
              return;
          }
      products[index].qty -=1;

      this.setState({
          products:products
          //products
          // the above line means the same as its above line becasue it has same values
      })  

  }

  handleDeletePorduct = (id)=>{
      console.log("hey delete the product with id ", id)
      
      const {products} = this.state;
      const items = products.filter((item)=>item.id!==id)

      this.setState({
          products:items

      })

  }

  getCartCount = ()=>{
    const {products} = this.state;

    let count = 0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal = ()=>{
    const {products} = this.state;

    let cartTotal = 0;
    products.map((product)=>{
      if (product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price
      }
      return '';
    });
    return cartTotal;
  }


  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeletePorduct = {this.handleDeletePorduct}
        />
        <div style={{padding:10, fontSize:20}}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }

}

export default App;
