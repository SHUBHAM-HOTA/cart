import React from 'react';
import CartItem from './CartItem';

const Cart = (props)=> {
    

  
    const {products} = props;
    return (
      <div className="cart">
         {/* <CartItem price={99} title={"watch"} qty={1} img={""}/>  */}
        {products.map ((product)=>{
            //we add the key to the props so that React can diffrecnciate between items
            
            return (
                <CartItem 
                    product = {product} 
                    key = {product.id} 
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeletePorduct = {props.onDeletePorduct}
                    
                />
            )
        })}
        
      </div>
    );
  
}

export default Cart;