import React from 'react';
import styled from 'styled-components';

import { useTheme, Box } from '@material-ui/core';
import { IconButton } from 'gatsby-theme-material-ui';
import { Facebook, WhatsApp, EmailOutlined } from '@material-ui/icons';

const SocialShareStyled = styled(Box)`
    &#mobile-social {
        display: flex;
    }

    &#desktop-social {
        display: none;
    }

    @media screen and (min-width: 960px) {
        position: sticky;
        top: ${({ theme }) => `${theme.mixins.toolbar.minHeight}px`};
        padding: 2rem 0;

        &#mobile-social {
            display: none;
        }

        &#desktop-social {
            display: flex;
            flex-direction: column;
        }

        .MuiBox-root {
            margin: 0 auto;
        }
    }
`;

const ArticleSocialShare = ({ id }) => {
    const theme = useTheme();

    return (
        <SocialShareStyled theme={theme} id={id}>
            <Box>
                <IconButton>
                    <Facebook />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <WhatsApp />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <EmailOutlined />
                </IconButton>
            </Box>
        </SocialShareStyled>
    );
};

export default ArticleSocialShare;
