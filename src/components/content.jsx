import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Hearts } from "react-loader-spinner";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="inherit">
        {" "}
        <Toolbar
          sx={{
            borderStyle: "solid",
            justifyContent: "flex-end",
            border: "none",
          }}
        >
          <Typography variant="h6" textAlign="right" color="#012169" noWrap>
            <CameraIcon sx={{ mr: 2, color: "#009739" }} />
            Nath Soares
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "#F1EFF2",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="50%">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              <code>
                Edita a <span className="editable">vida</span>, atualiza e segue
                o baile!
              </code>
            </Typography>
            <Typography variant="h5" align="center" color="#009739" paragraph>
              Dinos and Horses will always be around - connected to the earth
              and skies. Have you noticed this?
              <br />
            </Typography>

            <Typography variant="h5" align="center" color="#009739" paragraph>
              <Box className="appCenter">
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ p: 100 }}
                >
                  Ongoing learning
                </a>{" "}
              </Box>
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{ color: "#009739", bgcolor: "#FEDD00", fontWeight: "700" }}
              >
                Main call to action
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "#FEDD00", color: "#012169" }}
              >
                Secondary action
              </Button>
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Hearts
                height="80"
                width="200"
                color="#a461fb"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                alingText="center"
                sx={{ p: 100 }}
              />
            </Stack>
          </Container>
        </Box>

        <Container
          sx={{ py: 8, bgcolor: "#F1EFF2" }}
          maxWidth="100%"
          height="100%"
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "30 %",
                    }}
                    image="Fada-AI_gen.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor: "#a070df" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
