import React from 'react';
import styled from 'styled-components';

import { Drawer, ListItemText, ListItem, List, Divider, Collapse, makeStyles, Grid, useTheme } from '@material-ui/core';

import { Link, IconButton } from 'gatsby-theme-material-ui';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import menuItems from '../../data/menuItems';

const useStyles = makeStyles(theme => ({
    bgColor: {
        color: '#ffffff85',
    },
}));

const DrawerStyled = styled(Drawer)`
    .active {
        color: #8bc34a;
    }

    .MuiDrawer-paper {
        background: ${({ color }) => color};
    }

    .MuiSvgIcon-root {
        fill: #8bc34a;
    }
`;

const ListStyled = styled(List)`
    width: 70vw;
    margin-top: 48px;

    @media screen and (orientation: landscape) {
        width: 35vw;
        margin-top: 56px;
    }
`;

const ChildrenItem = ({ childs, handleClose }) => {
    const [childOpen, setChildOpen] = React.useState(false);

    const toggleChildOpen = () => setChildOpen(!childOpen);

    React.useEffect(
        () => () => {
            handleClose();
        },
        [handleClose]
    );

    return (
        <>
            <Grid item xs={3}>
                <IconButton onClick={toggleChildOpen} color="primary">
                    {childOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Divider />
            </Grid>
            <Collapse in={childOpen} style={{ width: '100%' }}>
                <Grid item xs={12}>
                    {childs.map(child => (
                        <ListItem button key={child.name}>
                            <Link to={child.link} activeClassName="active" color="inherit" underline="none">
                                {child.name}
                            </Link>
                        </ListItem>
                    ))}
                </Grid>
            </Collapse>
        </>
    );
};

const OverlayMenu = ({ open, handleClose }) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <DrawerStyled color={theme.palette.secondary.dark} anchor="right" open={open} onClose={handleClose}>
            <ListStyled className={classes.bgColor}>
                {menuItems.map(item => (
                    <Grid container alignItems="center" key={item.name}>
                        <Grid item xs={item.children ? 9 : 12}>
                            <ListItem button style={{ flexGrow: 1 }}>
                                <Link
                                    to={item.link}
                                    color="inherit"
                                    activeClassName="active"
                                    partiallyActive={item.link !== '/'}
                                >
                                    <ListItemText primary={item.name} primaryTypographyProps={{ variant: 'h5' }} />
                                </Link>
                            </ListItem>
                            <Divider />
                        </Grid>
                        {item.children ? <ChildrenItem childs={item.children} handleClose={handleClose} /> : null}
                    </Grid>
                ))}
            </ListStyled>
        </DrawerStyled>
    );
};

export default OverlayMenu;
