import React from "react";
import './Button.css'

export default props =>{
    let classes ='button'
    classes += props.opertion ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
      <button 
      onClick={e =>  props.click && props.click (props.label)}
      className={classes}>     
        {props.label}
        </button>
    )
  }


/*  
este é o segundo exemplo caso queira usar depois do <button
className=
    {`
      button
      ${props.opertion ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      `}></button>
   */