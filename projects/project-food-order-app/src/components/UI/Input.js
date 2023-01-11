import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
        <input>{props.children}</input>
    </div>
  )
}

export default Input