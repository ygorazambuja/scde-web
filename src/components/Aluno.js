import React from 'react';
import { Box, Text } from 'grommet';
import PropTypes from 'prop-types';

const Aluno = ({ nome, serie, ano }) => (
  <Box direction="row" justify="between" style={{ borderBottomWidth: 1, padding: 5, margin: 5 }}>
    <Text size="large">{nome}</Text>
    <Box>
      <Text>{serie}</Text>
      <Text>
        <strong>{ano}</strong>
      </Text>
    </Box>
  </Box>
);

Aluno.propTypes = {
  nome: PropTypes.string.isRequired,
  serie: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired
};


export default Aluno;
