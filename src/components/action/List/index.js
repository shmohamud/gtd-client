import React, {useState} from 'react'
import ActionDetailsCard from "../ActionDetailsCard";
import styles from "./index.css";
import {Checkbox} from '@material-ui/core';

const List = ({
  select,
  data,
  onCheckComplete
}) => {
  const [checkedActions, setCheckedActions] = useState([])

  if (data === undefined) {
    return "";
  }
  const isChecked = (action) => {
      if(checkedActions.length === 1){
        return checkedActions.includes(a => a._id === action._id)
      }
  }

  const handleCheck = (action) => {
    setCheckedActions(checkedActions=>[...checkedActions, action])
  }

  //On click of the list item --- delete the item from project array in state --- and delete the item from actual backend.
  return (
    data.length && (
      <ul>
        {data.map(d => {
          let checked= isChecked(d) 
            return (
          <div className={'action-card-container'}>
          <Checkbox onChange={() => {onCheckComplete(d); return handleCheck(d)} }/>
          <ActionDetailsCard
            key={d._id}
            data={d}
            select={select}
            checked={checked}
          />
          </div>)
          }
       
        )}
      </ul>
    
  ))
}

export default List;
