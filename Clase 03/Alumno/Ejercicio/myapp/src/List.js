import React from 'react'

export function OrderedList (props) {
    return <ol>{props.children} </ol>
  }
  
export function List(props) {
    return <ul>{props.children} </ul>
  }
  
export function ListItem (props){
    return <li> {props.children}</li>
  }