import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products : [
                {
                   price: 99,
                   title: ' Watch',
                   qty: 1,
                   img: '',
                   id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                 },
                 {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
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

  render () {
      const {products} = this.state;
    return (
      <div className="cart">
         {/* <CartItem price={99} title={"watch"} qty={1} img={""}/>  */}
        {products.map ((product)=>{
            //we add the key to the props so that React can diffrecnciate between items
            
            return (
                <CartItem 
                    product = {product} 
                    key = {product.id} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeletePorduct = {this.handleDeletePorduct}
                    
                />
            )
        })}
        
      </div>
    );
  }
}

export default Cart;