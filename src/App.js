import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/app";
import firestore from "firebase";

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products : [],
        loading: true
    }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
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
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeletePorduct = {this.handleDeletePorduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding:10, fontSize:20}}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }

}

export default App;
