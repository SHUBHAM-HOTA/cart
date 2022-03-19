import React from 'react';

class CartItem extends React.Component {
    


    // // testing() {
    // //   const promise = new Promise((resolve,reject)=>{
    // //     setTimeout(()=>{
    // //       resolve('done');

    // //     },5000);
    // //   })
    // //   promise.then(()=>{

    // //     //here setState works like a synchronus call
    // //     this.setState({qty: this.state.qty + 10});
    // //     console.log('state',this.state)

    // //   });
    // // }

    // //initially this was this before we added the arrow because of this instence 
    // //increaseQuantity(){
    // increaseQuantity= () => {
    //     //console.log('this.state',this.state)
    //     //the below line will update it in state but not in the vdom
    //     //this.state.qty += 1;

    //     //setState form 1
    //     // this.setState({
    //     //   qty: this.state.qty + 1
    //     // });

    //     //setsState form 2
    //     this.setState((prevState) => {
    //         return {
    //           qty: prevState.qty + 1
    //         }
    //       },()=>{
    //         console.log(this.state)
    //       });
    // }


    // decreaseQuantity = () => {
    //   const {qty} = this.state
    //   if (qty == 0){
    //     return;
    //   }

    //   this.setState((prevState)=>{
    //     return{
    //       qty: prevState.qty - 1
    //     }
    //   });
    // }

   


  render () {
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeletePorduct
    }= this.props;
    console.log(this.props)
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
                alt="increase" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                //if we dont want to bind here we can use the arrow function in cunstructer function
                //onClick={this.increaseQuantity.bind(this)}
                //onClick={this.increaseQuantity}
                onClick={() => onIncreaseQuantity(product)}
               
                
                
            />

            <img 
                alt="decrease"
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
               //onClick={this.decreaseQuantity}
               onClick={() => onDecreaseQuantity(product)}
            />
            <img 
                alt="delete" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                onClick={() => onDeletePorduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;