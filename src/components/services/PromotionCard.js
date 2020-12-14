/**
 * @props
 * tabTitle
 * title
 * price
 * description
 * features = []
 *
 * @Tutorial
 * Para funcionar, precisamos criar um array de objetos em "PRODUCTS"
 * Depois acrescentar no mínimo um array vazio em [FEATURES]
 */

import React from 'react';
import styled from 'styled-components';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import ServiceForm from '../forms/ServiceForm';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

const TabStyled = styled(Tab)`
    min-width: ${({ itens }) => `calc( 100% / ${itens} )`};
`;

const FeatureStyled = styled.div`
    margin: 1rem 0;
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function PromotionCard({ products = [] }) {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            className={classes.root}
            data-sal="slide-up"
            data-sal-delay="250"
            data-sal-easing="ease-out-back"
            style={{ '--sal-duration': '1.5s' }}
        >
            <AppBar position="static" color="transparent">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Promoções"
                >
                    {products.map((product, i) => (
                        <TabStyled
                            label={product.tabTitle}
                            {...a11yProps(i)}
                            itens={products.length}
                            key={`tabs-${i}`}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {products.map((product, i) => (
                <TabPanel value={value} index={i} key={`tab-${i}`}>
                    <Paper style={{ padding: theme.spacing(3) }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" component="h3" paragraph style={{ flexGrow: '1' }}>
                                {product.title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {product.price}
                            </Typography>
                        </div>
                        <Typography variant="body2" component="p">
                            {product.description}
                        </Typography>
                        {product.features ? (
                            <FeatureStyled className="features">
                                {product.features.map((feature, idx) => (
                                    <div
                                        className="feature"
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        key={`cardFeat-${idx}`}
                                    >
                                        <DoneIcon htmlColor={theme.palette.success.main} />{' '}
                                        <Typography variant="body2">{feature}</Typography>
                                    </div>
                                ))}
                            </FeatureStyled>
                        ) : null}
                    </Paper>
                </TabPanel>
            ))}

            <ServiceForm products={products} value={value} />
        </div>
    );
}
