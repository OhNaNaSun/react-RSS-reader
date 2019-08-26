import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import feedsDataActions from './feedsDataActions';

const FormDialog: React.SFC = () => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen(): void {
        setOpen(true);
    }

    function handleClose(): void {
        setOpen(false);
    }
    const AddFeed = (): void => {
        feedsDataActions.AddFeed('Tech', 'test');
        //handleClose();
    };
    return (
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add" />
            </ListItem>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Add Feed:</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add your website feed here</DialogContentText>
                    <TextField autoFocus margin="dense" id="name" label="Feed" type="url" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={AddFeed} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;
