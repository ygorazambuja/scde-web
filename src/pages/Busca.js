import React, { Component } from "react";
import { Grommet, Box, Heading, TextInput, Button, Text } from "grommet";
import { Link } from "react-router-dom";
import { FormPreviousLink } from "grommet-icons";
import Aluno from "../components/Aluno";
import { theme } from "../theme/themes";
import api from "../services/api";
import { HashLoader } from "react-spinners";
export default class Busca extends Component {
  state = {
    inputNome: "",
    isLoading: true,
    alunos: []
  };
  componentWillMount = () => {
    this.fetchAlunosFromLocalStorageOrWeb();
  };

  fetchAlunosFromLocalStorageOrWeb = () => {
    this.fetchAlunosFromLocalStorage();
  };

  fetchAlunosFromLocalStorage = () => {
    const alunosString = localStorage.getItem("@awesomescde:alunos");
    if (alunosString) {
      const alunos = JSON.parse(alunosString);
      this.setState({ isLoading: false });
      this.setState({ alunos });
    } else {
      this.fetchAlunosFromWeb();
    }
  };

  fetchAlunosFromWeb = () => {
    console.log("entrei aqui ");
    api
      .get("/alunos")
      .then(res => {
        this.setState({ alunos: res.data, isLoading: false });
        const alunosString = res.data;
        localStorage.setItem(
          "@awesomescde:alunos",
          JSON.stringify(alunosString)
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { alunos } = this.state;
    const { inputNome } = this.state;

    const dadosFiltrados = alunos.filter(aluno => {
      const regex = new RegExp(inputNome, "gi");
      return regex.test(aluno.nome);
    });
    const listRender = this.state.inputNome.trim() && (
      <Box pad="small">
        {dadosFiltrados.map(aluno => (
          <Aluno key={aluno._id} aluno={aluno} />
        ))}
      </Box>
    );

    return (
      <Grommet theme={theme}>
        <Box align={"center"}>
          <Box direction="row" align="center" justify="center">
            <Box
              border
              round
              style={{ borderColor: "#7D4CDB", marginRight: "2em" }}
            >
              <Link to="/">
                <Button label="" icon={<FormPreviousLink />} />
              </Link>
            </Box>

            <Heading>Buscar Alunos</Heading>
          </Box>
          <TextInput
            style={{ borderColor: "#7D4CDB" }}
            placeholder="Pesquise Aqui !"
            value={this.state.inputNome}
            onChange={e => this.setState({ inputNome: e.target.value })}
          />
        </Box>
        {listRender}
        {!this.state.inputNome.trim() && (
          <Box style={{ alignItems: "center", marginTop: "4em" }}>
            {this.state.isLoading && (
              <HashLoader
                size={100}
                sizeUnit="px"
                css="margin-bottom: 100px;"
              />
            )}
            <Text size="large" align="center">
              <strong style={{ color: "#7D4CDB" }}>Carregando</strong>
              <br />
              Para começar, digite algum
              <strong style={{ color: "#7D4CDB" }}> nome!</strong>
            </Text>
          </Box>
        )}
      </Grommet>
    );
  }
}
