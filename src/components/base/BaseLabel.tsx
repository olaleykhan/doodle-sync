import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  label: string;
  secondaryString?: string;
  htmlFor?: string;
}
const BaseLabel: React.FC<Props> = ({ label, secondaryString, htmlFor }) => {
  return (
    <Box mb={0.5} ml={0.2}>
      <Typography sx={{ pb: 2 }} color="#333" textTransform="capitalize" component="label" variant="body2" htmlFor={htmlFor}>
        {' '}
        {label}
        <Typography sx={{ pb: 2 }} color="grey.A100" component="span" variant="body2">
          {secondaryString}
        </Typography>
      </Typography>
    </Box>
  );
};

export default BaseLabel;
