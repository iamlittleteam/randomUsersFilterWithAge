import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Landing from "./Pages/Landing";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Landing />
      </Container>
    </Fragment>
  );
}

export default App;
