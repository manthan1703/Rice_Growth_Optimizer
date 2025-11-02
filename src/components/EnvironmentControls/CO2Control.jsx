import React from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import { Co2 } from '@mui/icons-material';
import { useOptimizer } from '../../context/OptimizerContext';

export default function CO2Control() {
  const { co2Level, setCo2Level } = useOptimizer();

  const handleCo2Change = (event, newValue) => {
    setCo2Level(newValue);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#fafafa' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Co2 color="info" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="medium">CO2 Level</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Current: {co2Level} ppm</Typography>
        <Slider
          min={200}
          max={1000}
          value={co2Level}
          onChange={handleCo2Change}
          aria-label="CO2 Level"
          color="info"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="caption">200</Typography>
          <Typography variant="caption">600</Typography>
          <Typography variant="caption">1000</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}