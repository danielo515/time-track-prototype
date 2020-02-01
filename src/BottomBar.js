import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';


const useStyles = makeStyles(theme => ({
    appBar: {
        top: "auto",
        bottom: 0
    },
    searchBar: {
        display: "flex",
        alignItems: "center",
        transition: theme.transitions.create('width', { duration: theme.transitions.duration.complex }),
        width: "40px",
        overflow: "hidden",
    },
    toolbar: {
        justifyContent: "flex-end",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        minHeight: 72
    },
    grow: {
        flexGrow: 1
    },
    nonSearch: {
        display: "flex",
        flex: "1 1 auto",
    },
    inputRoot: {
        backgroundColor: fade(theme.palette.background.paper, 0.5)
    },
    openSearch: {
        width: '200px'
    }
}));

export function BottomBar() {
    const css = useStyles();
    const [searchOpen, setSearchOpen] = useState(false);
    const toggleOpen = () => setSearchOpen(!searchOpen);

    return (
        <AppBar position="fixed" color="primary" className={css.appBar}>
            <Toolbar className={css.toolbar}>

                <div className={css.nonSearch}>
                    <Typography className={clsx(css.grow, css.text)} variant="h5" gutterBottom>
                        00:10:55
                    </Typography>
                    <Fab color="secondary" aria-label="add" className={css.fabButton}>
                        <AddIcon />
                    </Fab>

                </div>
                <div className={clsx(css.searchBar, { [css.openSearch]: searchOpen })}>
                    <IconButton color="inherit" onClick={toggleOpen} disableRipple>
                        <SearchIcon />
                    </IconButton>

                    <div>
                        <TextField
                            label="Filter"
                            id="search-filter"
                            variant="filled"
                            size="small"
                            className={css.inputRoot}
                        /></div>

                </div>
            </Toolbar>
        </AppBar>);
}
