import React, { type FC, type PropsWithChildren, useRef } from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HomeHero from "../components/HomeHero";
import RaceMap from "../components/RaceMap";

interface SectionProps {
  title: string;
  titleRef: React.MutableRefObject<HTMLSpanElement | null>;
  index: number;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ title, titleRef, index, children }) => (
  <Box
    sx={{
      backgroundColor: index % 2 === 0 ? "rgb(247, 250, 255)" : undefined,
    }}
    py={4}>
    <Container>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Stack spacing={2} flexGrow={1}>
          <Typography variant="h3" ref={titleRef} sx={{ scrollMarginTop: "80px" }}>
            {title}
          </Typography>
          {children}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

const Home: FC = () => {
  const theme = useTheme();

  const mapRef = useRef<HTMLSpanElement | null>(null);
  const scheduleRef = useRef<HTMLSpanElement | null>(null);
  const informationsRef = useRef<HTMLSpanElement | null>(null);
  const videoRef = useRef<HTMLSpanElement | null>(null);
  const posterRef = useRef<HTMLSpanElement | null>(null);

  return (
    <>
      <HomeHero />

      <Container sx={{ py: 4 }}>
        <Stack justifyContent="center" alignItems="center" spacing={4}>
          <Button variant="contained" size="large">
            M&apos;inscire
          </Button>
          <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={2}>
            {(
              [
                ["Parcours", mapRef],
                ["Programme", scheduleRef],
                ["Vidéo", informationsRef],
                ["Affiche", posterRef],
                ["Informations pratiques", informationsRef],
              ] as Array<[string, React.MutableRefObject<HTMLSpanElement | null>]>
            ).map(([title, ref], index, items) => (
              <>
                <Typography
                  key={title}
                  onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
                  sx={{ cursor: "pointer" }}
                  color="primary.main"
                  fontWeight="bold">
                  {title}
                </Typography>
                {index < items.length - 1 ? (
                  <Divider
                    orientation={
                      useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"
                    }
                    flexItem
                  />
                ) : null}
              </>
            ))}
          </Stack>
        </Stack>
      </Container>

      <Section title="Parcours" titleRef={mapRef} index={0}>
        <RaceMap />
      </Section>

      <Section title="Programme" titleRef={scheduleRef} index={1}>
        <Alert severity="info">Retrait des numéros a partir de 8h00</Alert>
        <Timeline>
          {[
            ["9h00", "Descente d'éssai"],
            ["10h30", "Première descente"],
            ["14h00", "Deuxième descente"],
            ["16h00", "Troisième descente"],
          ].map(([hour, label], index, array) => (
            <TimelineItem key={hour}>
              <TimelineOppositeContent>{hour}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index < array.length - 1 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography>{label}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section title="Vidéo" titleRef={videoRef} index={2}>
        <Box
          component="video"
          sx={{ height: { xs: 300, md: 500 }, backgroundColor: "black" }}
          controls>
          <source src="/video/track.mp4" type="video/mp4" />
        </Box>
      </Section>

      <Section title="Affiche" titleRef={posterRef} index={3}>
        <Stack alignItems="center">
          <Box
            component="img"
            sx={{ height: "800px", width: "max-content" }}
            src="/img/home/poster.jpg"></Box>
        </Stack>
      </Section>

      <Section title="Informations pratiques" titleRef={informationsRef} index={4}></Section>
    </>
  );
};

export default Home;
