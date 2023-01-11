import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
        <Input/>
        <button>+ Add</button>
    </div>
  )
}

export default MealItemForm