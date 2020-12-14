import React from 'react';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import FaqCard from '../faq/FaqCard';

import allDatoCmsService from '../../queries/allDatoCmsService';

const ServiceFaq = ({ faqSlug }) => {
    const faqData = allDatoCmsService();

    return (
        <Container maxWidth="md">
            <Box marginY="3rem">
                <Typography variant="overline" align="center" component="div">
                    Perguntas mais comuns
                </Typography>
                <Typography variant="h3" align="center">
                    FAQ
                </Typography>
            </Box>
            {faqData
                .filter(data => data.slug === faqSlug)
                .map((faq, idx) => (
                    <Grid container key={idx} spacing={2}>
                        {faq.faq.map((data, i) => (
                            <Grid item xs={12} key={`faq-${i}`}>
                                <FaqCard
                                    question={data.question}
                                    answer={data.answerNode.childMarkdownRemark.html}
                                    key={`${faq.slug}-${i}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ))}
        </Container>
    );
};

export default ServiceFaq;
