import React, { Component } from "react";
import { Box, Grommet, Heading, Button, Clock } from "grommet";
import { Search, Edit, Chat, Favorite } from "grommet-icons";
import { Link } from "react-router-dom";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

export default class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box
          align={"center"}
          pad="medium"
          border={{ color: "brand", size: "small" }}
          round
        >
          <Heading>{"{SCDE}"}</Heading>
          <Clock type="digital" />
          <Box justify="between">
            <Box style={{ padding: 20, margin: 10 }}>
              <Link to="/busca">
                <Button
                  icon={<Search />}
                  label="Buscar Alunos"
                  style={{ padding: 20, width: 200 }}
                />
              </Link>
            </Box>
            <Box style={{ padding: 20, margin: 10 }}>
              <Link to="/documentacao">
                <Button
                  icon={<Edit />}
                  label="Documentação"
                  style={{ padding: 20, width: 200 }}
                />
              </Link>
            </Box>
            <Box style={{ padding: 20, margin: 10 }}>
              <Link to="/recados">
                <Button
                  icon={<Chat />}
                  label="Recados"
                  style={{ padding: 20, width: 200 }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box style={{ padding: 20, margin: 10 }} align="center">
          <span>
            made by <strong>AzambujaCorp</strong>, with <Favorite color="red" />
          </span>
        </Box>
      </Grommet>
    );
  }
}
