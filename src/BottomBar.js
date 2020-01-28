import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import { useStyles } from "./demo";

export function BottomBar() {
    const classes = useStyles();
    return (<AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
            <Typography className={clsx(classes.grow, classes.text)} variant="h5" gutterBottom>
                00:10:55
      </Typography>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IconButton color="inherit">
                <SearchIcon />
            </IconButton>
        </Toolbar>
    </AppBar>);
}
