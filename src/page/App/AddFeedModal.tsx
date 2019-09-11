import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { FormLabel } from '@material-ui/core';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

interface ModalProps {
    refreshList: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            // minWidth: 50,
            // margin: theme.spacing(1),
            // display: 'flex',
            // flexWrap: 'wrap',
        },
        formField: {
            // flexBasis: 100,
        },
        paper: {
            height: 140,
            width: 100,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        button: {
            margin: theme.spacing(1),
        },
    }),
);
const FormDialog: React.SFC<ModalProps> = props => {
    const classes = useStyles();
    const { refreshList } = props;
    const [open, setOpen] = React.useState(false);
    const [feedText, changeFeedText] = React.useState('');
    const [currentFeedType, changeSelectedFeedType] = React.useState('');

    const [newFeedType, changeNewFeedType] = React.useState('');
    const [feedTypeList, setFeedTypeList] = React.useState([]);
    const fetchFeedTypeList = async (): Promise<object[]> => {
        const feed = await axios.get('/types');
        setFeedTypeList(feed.data);
        changeSelectedFeedType(feed.data[0]);
        return feed.data;
    };
    useEffect(() => {
        fetchFeedTypeList();
    }, []);
    function handleClickOpen(): void {
        setOpen(true);
    }

    function handleClose(): void {
        setOpen(false);
    }
    const postNewFeed = async (): Promise<object> => {
        await axios
            .post('/feeds', {
                type: 'work',
                feed: feedText,
            })
            .then(res => console.log(res.data));
        return {};
    };
    const postNewFeedType = async (): Promise<object> => {
        await axios.post('/types', newFeedType).then(res => console.log(res.data));
        return {};
    };

    const AddFeed = (): void => {
        postNewFeed();
        handleClose();
        refreshList();
    };

    // function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    //     setValues(oldValues => ({
    //         ...oldValues,
    //         [event.target.name as string]: event.target.value,
    //     }));
    // }
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
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
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-helper">Feed Type:</InputLabel>
                        <Select
                            value={currentFeedType}
                            onChange={(event): void => {
                                changeSelectedFeedType(event.target.value);
                            }}
                            input={<Input name="age" id="age-helper" />}
                        >
                            {feedTypeList.map(item => {
                                return (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText>Select a feed type here or create a new one.</FormHelperText>
                    </FormControl>
                    <FormLabel>OR</FormLabel>
                    <TextField
                        className={classes.formField}
                        autoFocus
                        margin="dense"
                        id="feedType"
                        label="Feed Type"
                        type="text"
                        onChange={(event): void => {
                            const typeValue = event.target.value;
                            changeNewFeedType(typeValue);
                        }}
                    />
                    <Button
                        onClick={(event): void => {
                            // TODO: pipe
                            postNewFeedType();
                            fetchFeedTypeList();
                            changeSelectedFeedType(event.target.value);
                        }}
                    >
                        add type
                    </Button>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Feed"
                        type="url"
                        fullWidth
                        onChange={(event): void => {
                            changeFeedText(event.target.value);
                        }}
                    />
                    gaga show here:{feedText}
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
