import React from 'react';
import { navigate } from 'gatsby';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';

import { Button, Grid, Typography, Paper, InputLabel } from '@material-ui/core';

const encode = data =>
    Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Coloque seu nome'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('Coloque seu e-mail'),
    site: Yup.string(),
    message: Yup.string().required('Descreva brevemente seu projeto'),
    phone: Yup.string().matches(phoneRegExp, 'Insira um telefone válido'),
});

const ContactForm = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
            site: '',
            phone: '',
            checkSite: false,
            checkSEM: false,
            checkSEO: false,
            checkIDVisual: false,
        }}
        onSubmit={(values, actions) => {
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': document.querySelector('form').getAttribute('name'), ...values }),
            })
                .then(() => {
                    actions.resetForm();
                })
                .catch(() => {
                    alert('Error');
                })
                .finally(() => {
                    actions.setSubmitting(false);
                    navigate(document.querySelector('form').getAttribute('action'));
                });
        }}
        validationSchema={validationSchema}
    >
        {({ submitForm, isSubmitting }) => (
            <Form name="Contato" data-netlify="true" action="contato/sucesso">
                <Grid item container spacing={3} xs={12}>
                    <Grid item xs={12}>
                        <Field component={TextField} fullWidth name="name" type="text" label="Nome*" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Field component={TextField} fullWidth name="email" type="email" label="Email*" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Field component={TextField} fullWidth name="site" type="text" label="Site, se houver" />
                    </Grid>

                    <Grid item xs={12}>
                        <Field component={TextField} fullWidth name="phone" type="tel" label="Telefone" />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            fullWidth
                            multiline
                            rows={4}
                            name="message"
                            type="textfield"
                            label="Descreva brevemente seu projeto"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container item spacing={2}>
                            <Grid item xs={12}>
                                <InputLabel>Selecione os serviços que mais se adequam ao que você precisa:</InputLabel>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={CheckboxWithLabel}
                                    name="checkSite"
                                    Label={{ label: 'Criação de Sites' }}
                                    type="checkbox"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={CheckboxWithLabel}
                                    name="checkSEM"
                                    Label={{ label: 'Search Engine Marketing (SEM)' }}
                                    type="checkbox"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={CheckboxWithLabel}
                                    name="checkSEO"
                                    Label={{ label: 'Otimização (SEO)' }}
                                    control="checkbox"
                                    type="checkbox"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    component={CheckboxWithLabel}
                                    name="checkIDVisual"
                                    Label={{ label: 'Identidade Visual' }}
                                    type="checkbox"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        )}
    </Formik>
);

export default ContactForm;
