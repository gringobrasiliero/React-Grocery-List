import React from 'react'


const GroceryListForm = (props) => (
  <form id="need to buy" onSubmit={props.onSubmit}>
    <input type="text" onChange={props.onChange} value={props.item} />
    <input type="submit" value="Add to List"/>
  </form>
)


export default GroceryListForm
