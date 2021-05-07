import React from "react";
import styled from "styled-components";

import { Grid } from "@material-ui/core";

import google from "../images/svgs/logos/google.svg";
import facebook from "../images/svgs/logos/facebook.svg";
import microsoft from "../images/svgs/logos/microsoft.svg";
import hubspot from "../images/svgs/logos/hubspot.svg";
import semrush from "../images/svgs/logos/semrush.svg";

const CertificateLogos = () => (
  <Grid
    container
    spacing={3}
    justify="center"
    alignItems="center"
    style={{ margin: "1rem 0" }}
  >
    <Grid item>
      <LogoStyled src={google} alt="Google" />
    </Grid>
    <Grid item>
      <LogoStyled src={facebook} alt="Facebook" />
    </Grid>
    <Grid item>
      <LogoStyled src={microsoft} alt="Microsoft" />
    </Grid>
    <Grid item>
      <LogoStyled src={hubspot} alt="Hubspot" />
    </Grid>
    <Grid item>
      <LogoStyled src={semrush} alt="SEMRush" />
    </Grid>
  </Grid>
);

const LogoStyled = styled.img`
  width: 90%;
  opacity: 0.6;
  transition: all 250ms ease;

  &:hover {
    opacity: 1;
  }
`;

export default CertificateLogos;
