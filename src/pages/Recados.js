import React, { Component } from "react";
import socket from "socket.io-client";
import { Grommet, Box, Heading, Button } from "grommet";
import Recado from "../components/Recado";
import api from "../services/api";
import { FormPreviousLink } from "grommet-icons";
import { Link } from "react-router-dom";
import { theme } from "../theme/themes";

export default class Recados extends Component {
  state = {
    recados: []
  };
  subscribeToEvents = () => {
    const io = socket("https://api-backend-scde.herokuapp.com");
    io.on("recado", data => {
      this.setState({ recados: [data, ...this.state.recados] });
    });
  };
  fetchData = () => {
    api
      .get("/recados")
      .then(res => this.setState({ recados: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.subscribeToEvents();
    this.fetchData();
  };

  render() {
    return (
      <Grommet theme={theme}>
        <Box direction="row" align="center" pad="small" style={{ padding: 10 }}>
          <Box
            border={{ color: "brand", size: "small", style: "dashed" }}
            round
          >
            <Link to="/">
              <Button icon={<FormPreviousLink />} />
            </Link>
          </Box>
          <Heading style={{ paddingLeft: 20 }}> Recados </Heading>
        </Box>
        <Box>
          {this.state.recados.map(recado => (
            <Recado recado={recado} key={recado._id} />
          ))}
        </Box>
      </Grommet>
    );
  }
}
