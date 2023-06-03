import React from "react";
import { Typography, Box, Stack, Button } from "@pankod/refine-mui";
import { Title, Sider, Layout, Header } from "components/layout";

const Success = () => {
  return (
    <Box component="div" display="flex">
      <Sider />
      <Typography fontSize="4vw">Success</Typography>
    </Box>
  );
};

export default Success;
