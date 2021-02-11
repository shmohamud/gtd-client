import React, {useState} from 'react'
import {useApp} from '../../../AppProvider';
import CreateDialog from '../../user/CreateDialog';
import Button from '@material-ui/core/Button';

const Signup = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Button style={{backgroundColor:"green", paddingTop:"10px", marginLeft:"2rem", marginTop:"1rem", maxWidth:"20%"}} color="primary" variant="contained" onClick={()=>setOpen(!open)}>Create New Account</Button>
        <CreateDialog open={open} setOpen={setOpen}/>
        </>
    )
}

export default Signup
