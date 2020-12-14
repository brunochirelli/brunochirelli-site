import React from 'react';
import styled from 'styled-components';

import { Button } from 'gatsby-theme-material-ui';
import { Box } from '@material-ui/core';

const HiddenStyled = styled(Box)`
    position: relative;
    transition: all 1s ease;

    &::after {
        position: absolute;
        top: 0;
        display: ${({ show }) => (show ? 'none' : 'block')};
        width: 100%;
        height: 400px;
        background: rgb(250, 250, 250);
        background: linear-gradient(0deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0) 100%);
        opacity: ${({ show }) => (show ? '0' : '1')};
        content: ' ';
    }
`;

const HideContent = ({ children, peek = '400px' }) => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(!show);

    return (
        <Box>
            <HiddenStyled
                show={show ? 1 : 0}
                maxHeight={show ? `${document.getElementById('content-hidden').scrollHeight}px` : peek}
                overflow={show ? 'visible' : 'hidden'}
                id="content-hidden"
            >
                {children}
            </HiddenStyled>
            <Box display="flex" justifyContent="center" marginY="2rem">
                <Button onClick={handleShow} variant="outlined" size="small">
                    {show ? 'Mostrar menos' : 'Leia mais'}
                </Button>
            </Box>
        </Box>
    );
};

export default HideContent;
