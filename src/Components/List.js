import React from 'react'


const List = (props) => (
  <ul>
      {props.items.map( (item, index) => <li id="list-item" key={index}> {item} <button id={index} onClick={props.onClick} value={item}>{props.text}</button> </li> )}
  </ul>
)


export default List
