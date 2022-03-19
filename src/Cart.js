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
                />
            )
        })}
        
      </div>
    );
  }
}

export default Cart;