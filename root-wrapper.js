import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import Layout from './src/components/layout/layout';
import { GlobalStyle, theme } from './src/theme/global-style';

export const wrapPageElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Layout>{element}</Layout>
    </ThemeProvider>
);
