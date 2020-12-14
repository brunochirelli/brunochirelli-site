import React from 'react';
import { navigate } from 'gatsby';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';

import {
    Button,
    Grid,
    Typography,
    Paper,
    InputLabel,
    MenuItem,
    useTheme,
    FormControl,
    FormHelperText,
} from '@material-ui/core';

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
    product: Yup.string().required('Selecione o produto que melhor corresponde as suas necessidades'),
});

const ContactForm = ({ products = [], value }) => {
    const theme = useTheme();

    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Paper style={{ marginTop: theme.spacing(2), padding: theme.spacing(3) }}>
            <Typography variant="h6" component="h3" style={{ flexGrow: '1' }}>
                Descreva seu projeto
            </Typography>
            <Typography paragraph>Entre em contato e diga qual a especificidade do seu projeto</Typography>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    site: '',
                    phone: '',
                    product: products[value].title,
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
                {({ submitForm, isSubmitting, errors, touched }) => (
                    <Form
                        name="Serviço"
                        data-netlify="true"
                        action="contato/sucesso"
                        style={{ display: show ? 'block' : 'none' }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="produto">Produto*</InputLabel>
                                    <Field
                                        component={Select}
                                        name="product"
                                        inputProps={{
                                            id: 'produto',
                                        }}
                                    >
                                        {products.map((option, i) => (
                                            <MenuItem value={option.title} key={option.title}>
                                                {option.title}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    {errors.product && touched.product && (
                                        <FormHelperText error>{errors.product}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Field component={TextField} fullWidth name="name" type="text" label="Nome*" />
                            </Grid>

                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Field component={TextField} fullWidth name="email" type="email" label="Email*" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Field component={TextField} fullWidth name="phone" type="tel" label="Telefone" />
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    name="message"
                                    type="textfield"
                                    label="Descreva brevemente seu projeto:"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Enviar
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="default"
                                    onClick={handleClose}
                                    style={{ marginLeft: '1rem' }}
                                >
                                    Fechar
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
            {show ? null : (
                <Button variant="outlined" color="primary" onClick={handleShow}>
                    Entre em contato
                </Button>
            )}
        </Paper>
    );
};

export default ContactForm;
