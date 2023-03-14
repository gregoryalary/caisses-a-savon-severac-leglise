import React, { type FC } from "react";
import { Link } from "react-router-dom";

import DownloadIcon from "@mui/icons-material/Download";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const Enrolment: FC = () => {
  return (
    <Box component={Container} py={4}>
      <Stack spacing={4}>
        <Alert severity="warning">
          <AlertTitle>10/06/2023</AlertTitle>
          <Stack spacing={1}>
            <Typography>Date limite d&apos;inscription</Typography>
          </Stack>
        </Alert>
        <Stack spacing={2}>
          <Typography variant="h4">Règlement</Typography>
          <ul>
            <li>
              <Typography>Règlement folklorique</Typography>
            </li>
            <li>
              <Typography>
                Règlement complet sur{" "}
                <Typography color="primary.main" component="span" fontWeight="bold">
                  <Link to="https://www.federation-caisses-a-savon.com/" target="_blank">
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
            <Card>
              <CardContent>
                <Typography>Mme Sophie Grosjean</Typography>
                <Typography>2 rue de la Gare</Typography>
                <Typography>89100 Sens</Typography>
              </CardContent>
            </Card>
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
