import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';

import { Container, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { IconButton } from 'gatsby-theme-material-ui';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const ShowCaseStyled = styled(Container)`
    position: relative;

    .gatsby-image-wrapper {
        height: 60vh;
    }
`;

const IconButtonStyled = styled(IconButton)`
    position: absolute;
    top: 45%;
    color: lightgrey;
    background: rgba(0, 0, 0, 0.4);

    &:hover {
        background: rgba(0, 0, 0, 0.9);
    }

    &#next {
        right: 16px;
    }

    &#back {
        left: 16px;
    }
`;

const SlideStyled = styled(Box)`
    margin: 1rem 0.25rem;

    @media screen and (min-width: 600px) {
        margin: 3rem 0.75rem;
    }
`;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PortfolioShowCase = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlideNavigation = () =>
        slideIndex < images.length - 1 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0);

    const handleNext = () => (slideIndex < images.length - 1 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0));
    const handleBack = () =>
        slideIndex > 0 && slideIndex <= images.length ? setSlideIndex(slideIndex - 1) : setSlideIndex(0);

    return (
        <Box style={{ backgroundColor: '#dce0e2' }}>
            <ShowCaseStyled>
                <AutoPlaySwipeableViews
                    interval={4000}
                    index={slideIndex}
                    onChangeIndex={handleSlideNavigation}
                    enableMouseEvents
                    autoPlay
                    style={{ padding: ' 0 10vw' }}
                >
                    {images.map((image, i) => (
                        <SlideStyled key={`portImg-${i}`}>
                            <Img fluid={image.fluid} />
                        </SlideStyled>
                    ))}
                </AutoPlaySwipeableViews>

                <IconButtonStyled id="back" color="inherit" onClick={handleBack}>
                    <ArrowBackIosRounded />
                </IconButtonStyled>
                <IconButtonStyled id="next" color="inherit" onClick={handleNext}>
                    <ArrowForwardIosRounded />
                </IconButtonStyled>
            </ShowCaseStyled>
        </Box>
    );
};

export default PortfolioShowCase;
