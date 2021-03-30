import React, { useEffect, useState } from "react";

export default function useSnackbar() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('')


  useEffect(() => {
    console.log("In useEffect, Snackbar: ", open, message)
    return () => {
     setOpen(false)
     setMessage("")
     setSeverity("")
    }
  }, [])


  const handleOpen = (msg, sev) => {
      console.log("message: ",msg)
      console.log("severity: ", sev)
      setMessage(msg || 'default snackbar messsage')
      setSeverity(sev || 'low')
      setOpen(true)
  }

 const handleClose = () => {
      setOpen(false)
  }

  return {
   open,
   handleOpen,
   handleClose,
   message,
   severity
  };
}
