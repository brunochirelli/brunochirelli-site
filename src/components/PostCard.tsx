import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { Box, Typography } from "@material-ui/core";
import { Button, CardActionArea, Link } from "gatsby-material-ui-components";

type PostCardProps = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: IGatsbyImageData;
};

const PostCard = ({ category, title, slug, excerpt, image }: PostCardProps) => {
  return (
    <StyledDiv>
      <Box>
        <CardActionArea to={`/blog/${slug}`}>
          <GatsbyImage image={image} alt={title} />
        </CardActionArea>
      </Box>
      <Box>
        <Typography variant="overline">{category}</Typography>
        <Typography variant="h4" component="h2" paragraph>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </Typography>
        <Typography variant="body1" paragraph>
          {excerpt}
        </Typography>
        <Button
          to={`/blog/${slug}`}
          variant="contained"
          color="secondary"
          disableElevation
        >
          Leia mais
        </Button>
      </Box>
    </StyledDiv>
  );
};

const StyledDiv = styled.div``;

export default PostCard;
