import React from 'react';
import Parse from 'html-react-parser';

import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const FaqCard = ({ question, answer }) => (
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content">
            <Typography variant="body1">{question}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography variant="body2" component="div">
                {Parse(answer)}
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
);

export default FaqCard;
