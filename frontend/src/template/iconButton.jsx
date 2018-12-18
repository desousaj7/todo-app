import React from 'react'
import IF from './if'

export default props => (
    
    <IF test={!props.hide}>
        <button className={'btn btn-' + props.style}
            onClick = {props.onClick}>
            <span className= {'glyphicon glyphicon-'+ props.icon}></span>
        </button>   
    </IF>        
)   
    
