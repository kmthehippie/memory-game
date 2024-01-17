import {useState} from 'react'
import "./card.css"

function Card (props) {
   
    return(
  
        <>
        <img src={props.link} alt={props.name} id ={props.id}/>
        <p>{props.name}</p>
        </>
   
        
    )
}

export default Card