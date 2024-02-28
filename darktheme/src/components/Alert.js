import React from 'react'

export default function Alert(props) {
  const height ={
    height:"50px"
  };
  return (
    <div style={height}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg}
  
</div>}
</div>
  )
}
