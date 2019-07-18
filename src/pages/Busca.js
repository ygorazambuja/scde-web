import React, { Component } from "react";
import { Grommet, Box, Heading, TextInput, Button, Text } from "grommet";
import { fetchAlunos } from "../store/actions/alunos";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Return } from "grommet-icons";
import Aluno from "../components/Aluno";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class Busca extends Component {
  state = {
    inputNome: "",
    isLoading: false
  };
  componentWillMount = () => {
    this.fetchAlunosFromLocalStorageOrWeb();
  };

  fetchAlunosFromLocalStorageOrWeb = () => {
    this.setState({ isLoading: true });
    this.props.onFetchAlunos();
    this.setState({ isLoading: false });
  };

  render() {
    const { alunos } = this.props;
    const { inputNome } = this.state;

    const dadosFiltrados = alunos.filter(aluno => {
      const regex = new RegExp(inputNome, "gi");
      return regex.test(aluno.nome);
    });

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
                <Button label="" icon={<Return />} />
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
        {this.state.inputNome.trim() && (
          <Box pad="small">
            {dadosFiltrados.map(aluno => (
              <Aluno key={aluno._id} aluno={aluno} />
            ))}
          </Box>
        )}
        {!this.state.inputNome.trim() && (
          <Box style={{ alignItems: "center", marginTop: "4em" }}>
            <Text size="large">
              <strong style={{ color: "#7D4CDB" }}>Carregando</strong>, para
              começar, digite algum{" "}
              <strong style={{ color: "#7D4CDB" }}>nome!</strong>
            </Text>
          </Box>
        )}
      </Grommet>
    );
  }
}

const mapStateToProps = ({ alunos }) => {
  return {
    alunos: alunos.alunos
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAlunos: () => dispatch(fetchAlunos())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Busca);
