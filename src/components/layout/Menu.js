import React from 'react';
import styled from 'styled-components';

import { IconButton, AppBar, Toolbar, useScrollTrigger, Container, Box } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import { Link } from 'gatsby-theme-material-ui';

import OverlayMenu from './OverlayMenu';
import Navbar from './Navbar';

import logo from '../../svgs/logos/logo.svg';

import MenuItems from '../../data/menuItems'; // menu data

const HeaderStyled = styled(Box)`
    .hamburger-menu,
    .overlay-menu {
        display: block;

        @media screen and (min-width: 960px) {
            display: none;
        }
    }
`;

const Logo = styled(Box)`
    margin-right: 0.75rem;

    img {
        width: 90%;
        padding: 0.1rem;
    }
`;

const Branding = styled(Link)`
    flex-grow: 1;
    color: black;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'Montserrat', 'sans-serif';
    text-decoration: none;
`;

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 5 : 0,
    });
}

export default function ElevateAppBar(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <HeaderStyled>
            <ElevationScroll {...props}>
                <AppBar component="div" style={{ background: 'white' }}>
                    <Container disableGutters>
                        <Toolbar>
                            <Logo component={Link} to="/">
                                <img src={logo} alt="Logo Bruno Chirelli" />
                            </Logo>
                            <Branding to="/" onClick={handleClose} underline="none">
                                Bruno <b>Chirelli</b>
                            </Branding>
                            <Navbar menuItems={MenuItems} />
                            <IconButton
                                edge="start"
                                className="hamburger-menu"
                                aria-label="menu"
                                color="primary"
                                onClick={open ? handleClose : handleOpen}
                            >
                                {open ? <Close /> : <Menu />}
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <OverlayMenu className="overlay-menu" open={open} handleClose={handleClose} />
        </HeaderStyled>
    );
}
