import React from 'react';
import styled from 'styled-components';
import { IconButton, Box, Popover, MenuItem } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { ExpandMore, WhatsApp } from '@material-ui/icons';

import MenuItems from '../../data/menuItems';

const NavStyled = styled.nav`
    display: none;
    height: 64px;
    color: #5e7080;

    .active {
        color: black;
    }

    @media screen and (min-width: 960px) {
        display: flex;
    }
`;

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <NavStyled>
            <Box component="ul" display="flex" margin={0}>
                {MenuItems.map((item, i) => (
                    <Box
                        display="flex"
                        alignItems="center"
                        component={MenuItem}
                        key={`${item.name}-${i}`}
                        style={{ padding: '0' }}
                    >
                        <Box style={{ height: '100%', width: '100%' }}>
                            <Link
                                to={item.link}
                                color="inherit"
                                underline="none"
                                activeClassName="active"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 0.75rem',
                                }}
                            >
                                {item.name}
                            </Link>
                        </Box>
                        {item.children ? (
                            <Box>
                                <IconButton edge="start" aria-describedby={item.name} onClick={handleClick}>
                                    <ExpandMore />
                                </IconButton>
                                <Popover
                                    id={item.name}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    {item.children.map((child, idx) => (
                                        <MenuItem key={`${item.name}-${idx}`} onClick={handleClose}>
                                            <Link to={child.link} color="inherit" underline="none">
                                                {child.name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Popover>
                            </Box>
                        ) : null}
                    </Box>
                ))}
                <Box display="flex" alignItems="center">
                    <IconButton
                        href="https://wa.me/551940420322"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#25D366' }}
                    >
                        <WhatsApp />
                    </IconButton>
                </Box>
            </Box>
        </NavStyled>
    );
};

export default Navbar;
