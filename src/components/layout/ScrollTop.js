import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1,
    },
}));

function ScrollComp(props) {
    const { children } = props;

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });

    return (
        <Zoom in={trigger}>
            <div onClick={() => scrollTo('#back-to-top-anchor')} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const ScrollTop = props => (
    <ScrollComp {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollComp>
);

export default ScrollTop;
