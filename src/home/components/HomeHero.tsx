import React, { type FC } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

const HomeHero: FC = () => (
  <Box
    sx={{
      backgroundColor: "rgb(247, 250, 255)",
      position: "relative",
      overflow: "hidden",
    }}>
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: { md: "600px" },
        }}>
        <Box display="flex" alignItems="center" sx={{ p: { xs: 2, md: 0 } }}>
          <Stack spacing={3} alignItems="start">
            <Typography component="h1" variant="h1" color="primary">
              Course de caisses à savon
            </Typography>
            <Typography variant="h2" color="secondary">
              Dimanche 25 juin 2023
            </Typography>
            <Typography variant="h3" color="text.secondary">
              Séverac l&apos;église • 12310
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flex: "0 0 50%",
            maxWidth: "50%",
          }}>
          <Box
            sx={{
              width: "50vw",
              height: "100%",
              position: "relative",
            }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}>
              <Box
                sx={{
                  position: "absolute",
                  clipPath: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)",
                  shapeOutside: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  left: 0,
                }}>
                <Box
                  sx={{
                    height: "100%",
                  }}>
                  <img
                    src="/img/home/hero.jpg"
                    style={{
                      height: "100%",
                      maxHeight: " 100%",
                      objectFit: "cover",
                      width: "100%",
                      maxWidth: "100%",
                    }}></img>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HomeHero;
