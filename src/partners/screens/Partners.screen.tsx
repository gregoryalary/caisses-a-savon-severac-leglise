import React, { type FC } from "react";

import { Box, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

import PageTitle from "../../app/components/PageTitle";

interface PartnerCardProps {
  name: string;
}

const PartnerCard: FC<PartnerCardProps> = ({ name }) => (
  <Box
    component={Paper}
    p={2}
    elevation={2}
    width="100%"
    alignItems="center"
    display="flex"
    justifyContent="center">
    <Typography align="center">{name}</Typography>
  </Box>
);

const Partners: FC = () => {
  return (
    <Box component={Container} py={4}>
      <Stack spacing={4}>
        <PageTitle title="Partenaires" />
        <Divider />
        <Box flexGrow={1}>
          <Grid container spacing={2} alignItems="stretch" direction="row">
            {[
              "DITEP de GREZES",
              "Les salariés du DITEP de GREZES",
              "Mairie de Laissac Séverac l'église",
              "Comité Cévenol",
              "Conseil départemental de l'Aveyron",
              "Crédit agricole de Laissac",
              "Comité des fêtes de Séverac l'église",
              "Association des chasseurs de Séverac l'église",
              "Entreprise Conte à Pierrefiche",
              "Endurance Shop à Rodez",
              "SDISS de l'Aveyron",
              "Radio TOTEM",
              "Garage MAJOREL-VIGOUROUX à Bertholène",
              "Carrosserie GRELLA à Bertholène",
              "Carrosserie VEZINET à Laissac",
              "Garage Auto Rêve à Rodez",
              "Garage JD Autos à Bagnols les bains (48)",
              "Auto Distribution CAPA à Rodez",
            ].map((name) => (
              <Grid key={name} item xs={12} sm={6} md={3} display="flex">
                <PartnerCard name={name} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Partners;
