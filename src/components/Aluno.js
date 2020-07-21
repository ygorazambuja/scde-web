import React from 'react';
import { Box, Text } from 'grommet';
import PropTypes from 'prop-types';

const Aluno = ({ nome, serie, ano }) => (
  <Box border round pad="medium" margin="medium" direction="column">
    <Box direction="row-responsive">
      <Text size="medium" weight="bold">{nome}</Text>
    </Box>
    <Box pad="medium" direction="row" justify="between">
      <Text>{serie}</Text>
      <Text>{ano}</Text>
    </Box>
  </Box>
);

Aluno.propTypes = {
  nome: PropTypes.string.isRequired,
  serie: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
};


export default Aluno;
