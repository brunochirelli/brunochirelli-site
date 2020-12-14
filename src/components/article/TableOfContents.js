import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';

const ToCStyled = styled.ul`
    padding: 0;
    color: rgb(115, 138, 148);
    list-style-type: none;

    li {
        padding: 1rem 0 0 1rem;
    }
`;

const TableOfContents = ({ page }) => {
    const [headings, setHeadings] = React.useState([]);
    const [links, setLinks] = React.useState([]);

    const getHeadings = () => {
        const theHeadings = [];
        document.querySelectorAll('.article h2').forEach(el => theHeadings.push(el.innerText));
        setHeadings(theHeadings);
    };

    const getLinks = () => {
        const theLinks = [];
        document.querySelectorAll('.toc').forEach(el => theLinks.push(el.href));
        setLinks(theLinks);
    };

    React.useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'smooth';

        getHeadings();
        getLinks();

        return () => (document.querySelector('html').style.scrollBehavior = 'auto');
    }, []);

    return (
        <ToCStyled>
            <Typography>{page ? 'Nesta página:' : 'Neste artigo:'}</Typography>
            {headings.map((head, i) => (
                <li key={`toc${i}`}>
                    <Link to={links[i]} color="inherit">
                        {head}
                    </Link>
                </li>
            ))}
        </ToCStyled>
    );
};

export default TableOfContents;
