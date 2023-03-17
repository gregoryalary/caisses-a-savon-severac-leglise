import React, { type FC } from "react";

import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import PageTitle from "../../app/components/PageTitle";

const StoryTelling: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component={Container} py={4}>
      <Stack spacing={4}>
        <PageTitle title="La team GABBA" />
        <Divider />
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ enabled: true }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}>
          {[
            { src: "/img/storytelling/team-gabba.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba2.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba3.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba4.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba5.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba6.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba7.jpg", alt: "Team GABBA" },
            { src: "/img/storytelling/team-gabba8.jpg", alt: "Team GABBA" },
          ].map(({ src, alt }) => (
            <SwiperSlide key={src}>
              <Box
                height={{ xs: 250, md: 400 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="grey.200"
                borderRadius={2}>
                <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={2}>
          {["Groh Sophie", "Alary Hubert", "Bosc Gilles", "Baroni Francois", "Amado Sophie"].map(
            (name, index, array) => (
              <>
                <Typography>
                  <Typography component="span" color="primary.main" fontWeight="bold" fontSize={22}>
                    {name.substring(0, 1)}
                  </Typography>
                  {name.substring(1)}
                </Typography>
                {index < array.length - 1 && (
                  <Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem />
                )}
              </>
            )
          )}
        </Stack>
        <Stack spacing={2}>
          <Typography>
            Sous l&apos;impulsion de madame GROH Sophie directrice adjointe, le projet «Caisse à
            savon» a vu le jour durant l&apos;année scolaire 2021. Ce projet concerne les eunes en
            formation à l&apos;Atelier mécanique.
          </Typography>
          <Typography>
            Après le soutien de notre directrice et du conseil d&apos;administration le top départ
            était donné.
          </Typography>
          <Typography>
            Un groupe de salariés intéressé et motivé par le projet se mirent à la recherche de
            contacts dans le milieu des courses de caisses à savon. Un premier contact fût pris
            auprès du Comité Cévenol organisateurs de courses dans la région Occitanie.
          </Typography>
          <Typography>
            L&apos;aventure était lancée, des contacts enrichissant auprès des professionnels de
            l&apos;automobile et leur précieuse aide technique et matérielle nous permirent de
            commencer la construction de notre caisse.
          </Typography>
          <Typography>
            Après une année de travail, en passant par la construction du châssis, l&apos;adaptation
            des éléments de freinage, suspension, la fabrication de la carrosserie en polyester,
            nous présentons en Septembre notre caisse au départ de la course à Branoux les Taillads
            (30).
          </Typography>
          <Typography>
            Suite à cette journée formidable, l&apos;accueil des organisateurs, les partages avec
            des participants passionnés nous proposèrent à notre direction d&apos;organiser une
            course sur notre village.
          </Typography>
          <Typography>
            Notre demande fût validée et nous sommes au travail depuis Septembre pour que la
            première course que nous organiserons le Dimanche 25 Juin 2023 soit une réussite.
          </Typography>
          <Typography>
            La continuité de ce projet se concrétise en 2023 par la construction de deux nouvelle
            caisses par les jeunes de l&apos;Atelier mécanique de l&apos;établissement.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StoryTelling;
