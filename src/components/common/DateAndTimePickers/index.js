import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
  }));
  
  export default function DateAndTimePickers({handleChange}) {
    const classes = useStyles();
  
    return (
      <form className={classes.container} onChange={handleChange}>
        <TextField
          required 
          id="datetime-local"
          label="Deadline"
          name="deadline"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }