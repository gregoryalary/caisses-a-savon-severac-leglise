import React, { type FC } from "react";

import { Box, Container, Link, Typography } from "@mui/material";

const Footer: FC = () => {
  const content = {
    brand: { image: "nereus-assets/img/nereus-light.png", width: 110 },
    copy: "© 2020 Nereus All rights reserved.",
    link1: "First Link",
    link2: "Second Link",
    link3: "Third Link",
    link4: "Fourth Link",
  };

  return (
    <Container maxWidth="lg">
      <Box py={6} display="flex" flexWrap="wrap" alignItems="center">
        <Link href="#" color="inherit" underline="none">
          CAS
        </Link>
        <Box component="nav">
          <Link href="#" variant="body1" color="textPrimary">
            {content.link1}
          </Link>
          <Link href="#" variant="body1" color="textPrimary">
            {content.link2}
          </Link>
          <Link href="#" variant="body1" color="textPrimary">
            {content.link3}
          </Link>
          <Link href="#" variant="body1" color="textPrimary">
            {content.link4}
          </Link>
        </Box>
        <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>
          {content.copy}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
