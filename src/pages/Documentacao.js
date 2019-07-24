import React, { Component } from "react";
import { Grommet, Box, Button, Heading } from "grommet";
import { Link } from "react-router-dom";
import { FormPreviousLink } from "grommet-icons";
import { theme } from "../theme/themes";

export default class Documentacao extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box align="center" direction="row">
          <Box
            border={{ color: "brand", size: "small", style: "dashed" }}
            round
          >
            <Link to="/">
              <Button icon={<FormPreviousLink />} />
            </Link>
          </Box>

          <Heading style={{ paddingLeft: 20 }}>Documentação</Heading>
        </Box>
        <Box>
          <Box align="center" justify="center">
            <Link to="/cadastrarDocumentacao">
              <Button style={styles.button} label="Cadastrar Aluno" />
            </Link>
            <Link to="/listarDocumentacao">
              <Button style={styles.button} label="Alunos devendo documentos" />
            </Link>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

const styles = {
  button: {
    fontSize: "26px",
    width: "350px",
    height: "70px",
    marginTop: "30px"
  }
};
