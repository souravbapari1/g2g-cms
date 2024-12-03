// src/admin/extensions/custom-homepage/index.js
import React from 'react';
import {  Box } from '@strapi/design-system';

const CustomHomePage = () => {
  return (
    <Box padding={8}>

      {/* Add any other components or content you want here */}
      <Box background="neutral0" padding={6} shadow="tableShadow" hasRadius>
        <h3>Your Custom Widgets or Content Here</h3>
        <p>This is where you can place any additional information, stats, or links.</p>
      </Box>
    </Box>
  );
};

export default CustomHomePage;
