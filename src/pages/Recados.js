import React, { Component } from "react";
import socket from "socket.io-client";
import { Grommet, Box, Heading } from "grommet";
import Recado from "../components/Recado";
import api from "../services/api";

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
      <Grommet>
        <Heading> Recados </Heading>
        <Box>
          {this.state.recados.map(recado => (
            <Recado recado={recado} key={recado._id} />
          ))}
        </Box>
      </Grommet>
    );
  }
}
