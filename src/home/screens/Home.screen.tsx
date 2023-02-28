import React, { type FC } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";

import L from "leaflet";

import { RACE_PATH_COORDINATES } from "../data/home.data";

const Home: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(247, 250, 255)",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            position: "absolute",
            content: '""',
            width: { xs: "60%", md: "30%" },
            zIndex: "1",
            top: "0px",
            left: { xs: "0%", md: "5%" },
            height: "100%",
            backgroundSize: "18px 18px",
            backgroundImage: "radial-gradient(rgba(47, 106, 217, 0.4) 20%, transparent 20%)",
            opacity: "0.2",
          },
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
                <Typography component="h1" fontWeight="bold" fontSize="3.75rem" lineHeight="1.2">
                  Course de caisses à savon
                </Typography>
                <Typography
                  component="h3"
                  fontWeight="bold"
                  fontSize="2.75rem"
                  lineHeight="1.2"
                  color="primary">
                  Dimanche 25 juin 2023
                </Typography>
                <Typography
                  component="h2"
                  fontSize="1.25rem"
                  lineHeight="1.2"
                  color="text.secondary">
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
      <Container sx={{ pt: 2, pb: 2 }}>
        <Stack justifyContent="center" alignItems="center">
          <Button variant="contained">M&apos;inscire</Button>
        </Stack>
      </Container>

      <Box
        sx={{
          backgroundColor: "rgb(247, 250, 255)",
        }}>
        <Container>
          <Stack direction="row" spacing={4} pt={2} pb={2}>
            <Stack spacing={2} flexGrow={1}>
              <Typography variant="h3">Programme</Typography>

              <Alert severity="info">Retrait des numeros a partir de 8h00</Alert>

              <Timeline
                sx={{
                  padding: 0,
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}>
                {[
                  ["9h00", "Descente d'éssai"],
                  ["10h30", "Première descente"],
                  ["14h00", "Deuxième descente"],
                  ["16h00", "Troisième descente"],
                ].map(([hour, label], index, array) => (
                  <TimelineItem key={hour}>
                    <TimelineSeparator>
                      <TimelineDot />
                      {index < array.length - 1 ? <TimelineConnector /> : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      {hour} : {label}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Stack>
            <Stack spacing={2} flexGrow={2}>
              <Typography variant="h3">Parcours</Typography>
              <MapContainer
                style={{ height: "400px" }}
                bounds={L.latLngBounds(RACE_PATH_COORDINATES)}
                zoom={13}
                attributionControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Polyline positions={RACE_PATH_COORDINATES}></Polyline>
              </MapContainer>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
