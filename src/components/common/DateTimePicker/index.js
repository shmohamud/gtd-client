import React, {useEffect} from "react";
import DateTimePicker from 'react-datetime-picker';
import "./index.css"

export default function DTPicker(props) {

  useEffect(()=>{
      console.log("Change: ", props.value)
  }, [props.value])

  return (
    <DateTimePicker className="date-time-picker" value={new Date(props.value)} />
  );
}
