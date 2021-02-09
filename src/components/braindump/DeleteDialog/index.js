import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useApp} from '../../../AppProvider';

export default function DeleteDialog({open, handleCloseOrCancel, id, onProcessed}) {
const {useAuth, useBraindump} = useApp()
const {deleteById} = useBraindump
const {token} = useAuth

  return (
    <div>
      
      <Dialog open={open} onClose={handleCloseOrCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Braindump Item?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click Delete to throw this braindump item away.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOrCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={async ()=>{await deleteById(token, id); await onProcessed()}} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
