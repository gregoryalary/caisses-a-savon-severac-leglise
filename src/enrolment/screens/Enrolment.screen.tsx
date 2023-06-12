import React, { type FC } from "react";
import { Link } from "react-router-dom";

import DownloadIcon from "@mui/icons-material/Download";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import PageTitle from "../../app/components/PageTitle";

const Enrolment: FC = () => {
  return (
    <Box component={Container} py={4}>
      <Stack spacing={4}>
        <PageTitle title="Inscription" />
        <Divider />
        <Alert severity="warning">
          <AlertTitle>Mardi 20/06/2023</AlertTitle>
          <Stack spacing={1}>
            <Typography>Date limite d&apos;inscription</Typography>
          </Stack>
        </Alert>
        <Stack spacing={2}>
          <Typography variant="h4">Règlement</Typography>
          <ul>
            <li>
              <Typography color="primary.main" component="span" fontWeight="bold">
                <a href="/document/reglement-folkorique.pdf" target="_blank">
                  Règlement folklorique
                </a>
              </Typography>
            </li>

            <li>
              <Typography>
                Règlement complet sur{" "}
                <Typography color="primary.main" component="span" fontWeight="bold">
                  <Link to="https://www.federation-caisses-a-savon.com/blank-3" target="_blank">
                    www.federation-caisses-a-savon.com
                  </Link>
                </Typography>
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h4">Modalites d&apos;inscription</Typography>
          <Stack direction="column" spacing={2}>
            <Typography>
              Pour valider votre inscription, veuillez imprimer le bulletin d&apos;engagement
              ci-dessous et le retourner rempli et accompagné de votre paiement à l&apos;ordre de
              <Typography component="span" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                &ldquo;DITEP de Grezes&rdquo;
              </Typography>{" "}
              à l&apos;adresse suivante :
            </Typography>
            <Box
              sx={{ borderLeftWidth: 4, borderLeftColor: "grey.300", borderLeftStyle: "solid" }}
              pl={2}>
              <Stack spacing={1}>
                <Typography>Mme Sophie GROH</Typography>
                <Typography>DITEP de Grèzes</Typography>
                <Typography>8 avenue de la Plaine</Typography>
                <Typography>Sévérac l&apos;Eglise</Typography>
                <Typography>12310 LAISSAC-SEVERAC L’EGLISE</Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <Button
            variant="contained"
            size="large"
            endIcon={<DownloadIcon />}
            href="/document/inscription-caisse-a-savon-severac-leglise.pdf"
            download="inscription-caisse-a-savon-severac-leglise.pdf"
            target="_blank">
            Télécharger le bulletin d&apos;engagement
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Enrolment;
