import React from 'react';
import parse from 'html-react-parser';

const ArticleContent = ({ content }) => <article>{parse(content)}</article>;

export default ArticleContent;
