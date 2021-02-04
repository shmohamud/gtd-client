import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { useApp } from "../../../AppProvider";

const NoteInput = ({handleChange}) => {

//On click of "reference" --- create from reference hook using urls and note
    const handleKeyPress = (e) => {
        console.log(e)
        if (e.key == "Enter" && e.target.value.length) {
            e.preventDefault();     
        }
      };
      
    return (
        <form
        autoComplete="off"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      >
            <TextField name={'note'}label={'Note text'}/>

      </form>

 
    )
}

export default NoteInput
