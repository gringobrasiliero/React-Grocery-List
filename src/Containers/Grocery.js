import React, { Component } from 'react';
import List from '../Components/List.js'
import GroceryListForm from '../Components/GroceryListForm.js'

class Grocery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: "",
      cart: []

    };
  }

  clear = () => {
    this.setState({
      item: ""
    })
  }

  addToCart = (e) => {
    this.setState({
      cart: [ ...this.state.cart, e.target.value],
      list: [ ...this.state.list.filter( item => item !== e.target.value )]
    })
  }

  backToList = (e) => {
    this.setState({
      list: [ ...this.state.list, e.target.value],
      cart: [ ...this.state.cart.filter( item => item !== e.target.value )]
    })
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let list = this.state.list;
    let cart = this.state.cart;
    let item = this.state.item;
    if(item === ""){
      return;
    }else if(list.includes(item)){
      this.clear();
      alert("Item Already In List")
    }else if (cart.includes(item)){
      alert("Item is in cart")
      this.clear();
    }else{
      this.setState({
        list: [ ...this.state.list, item],
        item: ""
      })
    this.clear();
    }
    }

  render() {
    return(
      <React.Fragment>

      <GroceryListForm onSubmit={this.handleSubmit} onChange={this.handleChange} item={this.state.item} />
        <div id="List">
          <h1>Need To Buy</h1>
          <List items={this.state.list} onClick={this.addToCart} text={"Add To Cart"} />
        </div>


        <div id="Cart">
          <h1> In My Cart </h1>
          <List items={this.state.cart} onClick={this.backToList} text="Back To List"/>
        </div>

      </React.Fragment>
    )
  }
}
export default Grocery
