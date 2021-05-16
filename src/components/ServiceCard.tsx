import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { Button, CardActionArea } from "gatsby-material-ui-components";

import { Box, Typography } from "@material-ui/core";

type ServiceCardProps = {
  title: string;
  slug: string;
  image: IGatsbyImageData;
};

const ServiceCard = ({ image, slug, title }: ServiceCardProps) => {
  return (
    <StyledDiv>
      <Box display="flex" flexDirection="column" height="100%">
        {/* imagem */}
        <Box height="50%">
          <CardActionArea to={`servicos/${slug}`}>
            <GatsbyImage image={image} alt="" />
          </CardActionArea>
        </Box>

        {/* texto */}
        <Box p={1} flexGrow={1} height="50%">
          <Box py={1}>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" disableElevation color="secondary">
              Saiba Mais
            </Button>
          </Box>
        </Box>
      </Box>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.background.contrast};
  border-radius: 10px;

  .gatsby-image-wrapper {
    height: 250px;
  }
`;

export default ServiceCard;
